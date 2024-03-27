/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
     const result = [];

    const addToResult = (num) => {
        if (!result.includes(num)) {
            result.push(num);
        }
    };

    for (const num of nums1) {
        if (nums2.includes(num) || nums3.includes(num)) {
            addToResult(num);
        }
    }

    for (const num of nums2) {
        if (nums1.includes(num) || nums3.includes(num)) {
            addToResult(num);
        }
    }

    for (const num of nums3) {
        if (nums1.includes(num) || nums2.includes(num)) {
            addToResult(num);
        }
    }

    return result;
    
};