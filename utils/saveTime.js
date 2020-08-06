const fs = require("fs");

const saveTime = (data) => {
  try {
    //     if (data.mins > 60) {
    //         data.mins = data.mins % 60;
    //         data.hour += 1;
    //   }
    fs.writeFileSync("data.json", data);
    console.log(data);
    console.log("time saved");
  } catch (e) {
    console.log(e);
  }
};

// saveTime(123);
module.exports = saveTime;
