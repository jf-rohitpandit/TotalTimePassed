const express = require("express");
const time = require("./utils/loadTime.js");
const saveTime = require("./utils/saveTime");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "hbs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const port = 3000;

app.get("/", (req, res) => {
  res.render("index", {
    totalTime: {
      hours: 0,
      mins: 0,
    },
  });
});

app.get("/start", (req, res) => {
  const pastData = time();
  console.log("hel");
  res.render("timer", {
    totalTime: pastData,
  });
});
app.post("/stop", (req, res) => {
  console.log("hello");
  console.log(req.body);
  saveTime(JSON.stringify(req.body));
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`App is live at port: ${port}`);
});
