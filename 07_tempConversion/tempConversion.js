const convertToCelsius = function(fahrenheitTemp) {
  let celsiusTemp = (fahrenheitTemp - 32)* (5/9); 
  console.log(parseFloat((fahrenheitTemp - 32)* (5/9)));
  return parseFloat(celsiusTemp.toFixed(1)) ;
};

const convertToFahrenheit = function(celsiusTemp) {
  let fahrenheightTemp = celsiusTemp * (9/5) + 32;
  return parseFloat(fahrenheightTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

