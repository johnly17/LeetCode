/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let num1 = 0;
    let num2 = 0;
    
    let nArr = [];
    
    for (let i = 1; i <= n; i++) {
        nArr.push(i);
    }
    
    for (let j = 0; j < nArr.length; j++) {
        if (nArr[j] % m === 0) {
            num2 += nArr[j];
        } else {
            num1 += nArr[j];
        }
    }
    
    return num1 - num2;
};