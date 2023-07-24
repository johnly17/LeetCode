/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let tempArray =[celsius + 273.15, celsius * 1.80 + 32.00]
    return tempArray
};