import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator (req, res, next) {
  bandName = req.body.street + req.body.pet;
  next();
}

app.use(bandNameGenerator);

app.post("/submit", (req, res) => {
  console.log(req.body);
  console.log(req.body.street);
  console.log(req.body.pet);
  res.send(`<h1>Your band name is: </h1><h2>${bandName}</h2>`)
})


app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on the most excellent port of ${port}`);
});
