import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// epress settings
app.set("views", path.join(__dirname, "ejsfiles"));
app.set("veiw engine", "ejs");

const day = 0;

let today = "weekday";
let advice = "chase the bag";

app.get("/", (req, res) => {``

  res.render("index.ejs", { adv: advice, date: today });
});

app.listen(port, () => {
  console.log(`server live at port : ${port}`);
});
