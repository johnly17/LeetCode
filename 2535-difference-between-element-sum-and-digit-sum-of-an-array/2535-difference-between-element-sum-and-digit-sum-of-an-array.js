/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let arrSum = 0;
    let digitSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].toString().length > 1) {
            let newNums = nums[i].toString().split('')
            for (let j = 0; j < newNums.length; j++){
                digitSum += Number(newNums[j])
            }
        } else {
            digitSum += nums[i]    
        }
        
        arrSum += nums[i];
    }
    return Math.abs(arrSum - digitSum)
};