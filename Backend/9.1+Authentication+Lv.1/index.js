import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//set up database
const db = new pg.Client({
  database: "secrets",
  host: "localhost",
  port: "5432",
  user: "postgres",
  password: "data@04!!",
});

//connect to the database
db.connect();

//home
app.get("/", (req, res) => {
  res.render("home.ejs");
});

//returns login page
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

//returns register page
app.get("/register", (req, res) => {
  res.render("register.ejs");
});

//register user
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }
  try {
    const insertedData = await db.query(
      `INSERT INTO users (username, password) VALUES ($1,$2) RETURNING *;`,
      [username, password]
    );
    res.status(200).render("secrets.ejs", { user: insertedData.rows[0] });
  } catch (error) {
    if (error.code === 23505) {
      console.error(error);
      res.status(409).json({ error: "username already exists" });
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
});

// login user
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }
  try {
    const user = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    if (user.rows.length === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      const userPassword = user.rows[0].password;
      if (password === userPassword){
        res.status(200).render("secrets.ejs");
      }else{
        res.status(401).json({error: "Invalid Password"});
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
