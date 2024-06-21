import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//db setup
const db = new pg.Client({
  database: "world",
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "data@04!!",
});

//connect to database
db.connect();

app.get("/", async (req, res) => {
  let countries = [];
  const results = (await db.query("SELECT country FROM visited_countries"))
    .rows;
  results.forEach((element) => {
    countries.push(element.country);
  });
  res.render("index.ejs", { countries: countries, total: countries.length });
});

//
app.post("/add", async (req, res) => {
  const { country } = req.body;
  try {
    const countryData = await db.query("SELECT c_code,c_name FROM countries");
    const matchingCountry = countryData.rows.find(
      (element) => element.c_name.toLowerCase() === country.toLowerCase()
    );

    if (matchingCountry) {
      const countryCode = matchingCountry.c_code;
      await db.query(
        `INSERT INTO visited_countries (country) VALUES ($1) ON CONFLICT DO NOTHING`,
        [countryCode]
      );
      res.status(302).redirect("/");
    } else {
      res.status(404).json({ error: "Invalid country name" });
    }
  } catch (error) {
    console.error("Database querry failed: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
