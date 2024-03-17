/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let string = nums.toString().replaceAll(',', "");
    console.log(string);
    
    let result = Array.from(string, Number);
    return result;
};