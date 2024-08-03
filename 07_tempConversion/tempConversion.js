const convertToCelsius = function(fahrenheit) {
    let valInCelsius =  5/9 * (fahrenheit - 32);
    return Math.round( valInCelsius * 10 ) / 10;
};

const convertToFahrenheit = function(celsius) {
    let valInFahrenheit = 9 / 5 * celsius + 32;
    return Math.round( valInFahrenheit * 10 ) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
