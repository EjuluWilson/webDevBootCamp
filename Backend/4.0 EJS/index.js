import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// epress settings
app.set("views", path.join(__dirname,"ejsfiles"));
app.set("veiw engine", "ejs");

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.listen(port,()=>{
    console.log(`server live at port : ${port}`);

})