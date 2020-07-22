const express = require("express");

const app = express();

app.set("view engine", "hbs");

const port = 3000;

app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.listen(port, () => {
  console.log(`App is live at port: ${port}`);
});
