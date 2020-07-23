const fs = require("fs");
const path = require("path");

const time = () => {
  try {
    const dataBuffer = fs.readFileSync("data.json");
    return JSON.parse(dataBuffer.toString());
    // return timeInHour(parseInt(dataBuffer.toString()));
  } catch (e) {
    return {
      hours: 0,
      mins: 0,
    };
  }
};
// console.log(time());
module.exports = time;
