const convertToCelsius = function(degrees) {
  //x * (9/5) + 32
  let result = (degrees - 32) * (5/9);
  let rounded = Math.round(result * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(degrees) {
  //x * (9/5) + 32
  let result = degrees * (9/5) + 32;
  let rounded = Math.round(result * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

console.log(convertToCelsius(100));