const fs = require("fs");
const path = require("path");

const Time = () => {
  try {
    fs.readFile("data.txt", (err, data) => {
      if (err) {
        console.log({
          total: 0,
          time: Date.now(),
        });
      } else {
        console.log({
          total: parseInt(data.toString()),
          time: Date.now(),
        });
      }
    });
  } catch {
    console.log("Some Error occured while reading data");
  }
};

module.exports = Time;
