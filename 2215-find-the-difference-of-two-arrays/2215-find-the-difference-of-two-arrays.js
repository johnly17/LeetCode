/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const num1Set = new Set(nums1);
    const num2Set = new Set(nums2);
    
    const num1Diff = new Set();
    const num2Diff = new Set();
    
    for (let u = 0; u < nums1.length; u++) {
        if (!num2Set.has(nums1[u])) {
            num1Diff.add(nums1[u])
        }
    }
    
    for (const num of nums2) {
        if (!num1Set.has(num)) {
            num2Diff.add(num);
        }
    }
    
    return [Array.from(num1Diff), Array.from(num2Diff)];
    
};