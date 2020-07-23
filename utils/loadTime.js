const fs = require("fs");
const path = require("path");

const timeInHour = (time) => {
  const hours = parseInt(time / 60);
  const mins = time % 60;

  return {
    hours,
    mins,
  };
};

const time = () => {
  try {
    const dataBuffer = fs.readFileSync("data.txt");
    return timeInHour(parseInt(dataBuffer.toString()));
  } catch (e) {
    console.log("Some Error occured while reading data");
    return e;
  }
};
// console.log(time());
module.exports = time;
