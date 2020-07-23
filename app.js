const express = require("express");
const time = require("./utils/loadTime.js");
const saveTime = require("./utils/saveTime");

const app = express();

app.set("view engine", "hbs");

const port = 3000;

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/start", (req, res) => {
  const pastData = time();
  console.log("hel");
  res.render("index", {
    totalTime: pastData,
    currentTime: 0,
  });
});

app.post("/stop", (req, res) => {
  req.render("index");
});

app.listen(port, () => {
  console.log(`App is live at port: ${port}`);
});
