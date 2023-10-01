/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let str = num.toString().split('').sort();
    
    return parseInt(str[0] + str[2]) + parseInt(str[1] + str[3]);
};