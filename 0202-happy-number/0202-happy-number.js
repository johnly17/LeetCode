/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function sumOfSquares(num) {
        return num.toString().split('').map(x => parseInt(x)**2).reduce((a,b) => a + b, 0);
    }
    
    let slow = n;
    let fast = n;
    
    do {
        slow = sumOfSquares(slow);
        fast = sumOfSquares(sumOfSquares(fast));
    } while (slow !== fast)
    
    return slow === 1;
};

