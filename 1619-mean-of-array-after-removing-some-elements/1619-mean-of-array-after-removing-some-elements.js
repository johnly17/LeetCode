/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a, b) => a - b)

    let fpl = arr.length * 0.05 
    let sum = 0;

    for (let i = fpl; i < arr.length - fpl; i++) sum += arr[i]

    return sum / (arr.length - (fpl * 2))
};