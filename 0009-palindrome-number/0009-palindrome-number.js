/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const revNum = Number(x.toString().split("").reverse().join(""));
    console.log(revNum)
    return x === revNum ? true : false;
};