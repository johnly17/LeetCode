/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let possible = nums[0];
    let count = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            possible = nums[i];
            count = 1;
        } else if (nums[i] === possible) {
            count++
        } else {
            count--
        }
    }
    
    return possible;
    
};