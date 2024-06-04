import express from "express";

const app = express();
const port = 3000;

app.get("/",(req, res) =>{
  res.send(`<h1> wilson Ejulu live at port ${port} </h1>`)
})

app.listen(port, () =>{
  console.log(`This server is live at port:  ${port}`);
});