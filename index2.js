const { nextISSTimesForMyLocation } = require("./iss_promised");

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    // console.log(datetime)
    datetime.setUTCSeconds(pass.risetime);
    // console.log(datetime)
    // console.log(pass.risetime)
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation()
.then((passTimes) => {
  // console.log(passTimes)
  printPassTimes(passTimes);
})
.catch((error) => {
  console.log("It didn't work: ", error.message);
});

