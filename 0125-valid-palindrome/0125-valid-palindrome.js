/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newStr = s.replace(/[\W_]+/g, '').toLowerCase();
    console.log(newStr);
    if (newStr === "") return true;
    
    let left = 0;
    let right = newStr.length - 1;

    while (left < right) {
        if (newStr[left] !== newStr[right]) return false;
        left++
        right--
    }
    
    return true;
};