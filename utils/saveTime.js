const fs = require("fs");

const saveTime = (data) => {
  try {
    fs.writeFileSync("data.json", data);
    console.log("time saved");
  } catch (e) {
    console.log(e);
  }
};

// saveTime(123);
module.exports = saveTime;
