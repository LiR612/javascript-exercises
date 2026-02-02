const convertToCelsius = function(fahrenheitVal) {
  let celsiusVal = parseFloat(((fahrenheitVal-32)*(5/9)).toFixed(1));
  console.log(celsiusVal);
  let decPortion = parseFloat((celsiusVal%1).toFixed(1));
  console.log(decPortion);
  if(decPortion==0.0){
    return Math.floor(celsiusVal);
  } else {
    return celsiusVal;
  }
};

const convertToFahrenheit = function(celsiusVal) {
  let fahrenheitVal = parseFloat(((9/5)*(celsiusVal)+32).toFixed(1));
  let decPortion = parseFloat((fahrenheitVal%1).toFixed(1));
  if(decPortion==0.0){
    return Math.floor(fahrenheitVal);
  } else {
    return fahrenheitVal;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
