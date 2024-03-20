/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let sArr = s.toUpperCase().split('');
    let count = 0;
    
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] != sArr[i + 1]) {
            count++;
        }
    }
    
    return count - 1;
};