/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const numArr = Array.from(n.toString()).map(Number);
    const sum = numArr.reduce((a, b) => a + b);
    const product = numArr.reduce((a, b) => a * b);
    
    return product - sum;
};