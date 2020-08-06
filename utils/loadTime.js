const fs = require("fs");
const path = require("path");
const { json } = require("body-parser");

const time = () => {
  try {
    const dataBuffer = fs.readFileSync("data.json");
    if (dataBuffer.toString().length) {
      new Error();
    }

    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    return {
      hours: 0,
      mins: 0,
    };
  }
};
module.exports = time;
