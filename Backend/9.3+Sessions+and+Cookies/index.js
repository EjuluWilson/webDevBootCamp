import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";
import env from "dotenv"

const app = express();
const port = 3000;
env.config();

const db = new pg.Client({
  database: process.env.PG_DATABASE ,
  host: process.env.PG_HOST,
  port: process.env.PG_DB_PORT ,
  user: process.env.PG_USER ,
  password: process.env.PG_PASSWORD
});

db.connect();

//middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, // Don't save the session if it hasn't been modified
    saveUninitialized: false, // Don't create a session until something is stored
  })
);
app.use(passport.initialize());
app.use(passport.session());

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); //Log for debugging
  res
    .status(500)
    .json({ message: "Internal Server Error", error: err.message });
});

//define a local strategy
passport.use(
  new LocalStrategy(async (username, password, cb) => {
    try {
      const res = await db.query("SELECT * FROM users WHERE username = $1", [
        username,
      ]);

      //get user data
      const user = res.rows[0];

      if (!user) {
        return cb(null, false, { message: "User does not exist" });
      } else {
        //validate bcrypted password
        const hashedPassword = user.password;
        const isAuthenticated = await bcrypt.compare(password, hashedPassword);

        if (isAuthenticated) {
          cb(null, user);
        } else {
          return cb(null, false, { message: "Invalid password" });
        }
      }
    } catch (error) {
      return cb(error);
    }
  })
);

//serialise user
passport.serializeUser((user, cb) => {
  cb(null, user);
});

//deserialise user
passport.deserializeUser((user, cb) => {
  cb(null, user);
});

//returns the homepage
app.get("/", (req, res) => {
  res.render("home.ejs");
});

//returns the login page
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

//returns the register page
app.get("/register", (req, res) => {
  res.render("register.ejs");
});

//returns the secrets page
app.get("/secrets", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).render("secrets.ejs");
  } else {
    res.status(301).redirect("/login");
  }
});

//handle user registeration
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const response = await db.query(
      "INSERT INTO users (username,password) VALUES ($1, $2) RETURNING *",
      [username, hashedPassword]
    );

    const user = response.rows[0];

    //login user
    req.login(user, (error) => {
      if (error) {
        return next(error);
      }
      return res.redirect("/secrets");
    });

    // catch any other errors
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ message: "User already exists" });
    }
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//handle user login
app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/secrets",
  })
);

//handle logout
app.get("/logout",(req,res)=>{
  req.logOut((err)=>{
    if(err){
      return next(err);
    }
    res.status(302).redirect("/");
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
