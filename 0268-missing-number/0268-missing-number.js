/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
   const n = nums.length;
  // Calculate the expected sum of all numbers in [0, n]
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate the actual sum of the given array
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  // Find the missing number by subtracting the actual sum from the expected sum
  const missingNumber = expectedSum - actualSum;

  return missingNumber;
    
};