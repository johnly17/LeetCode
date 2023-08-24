/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let n = num;
    let counter = 0;
    while (n !== 0) {
        if (n % 2 === 0) {
            n = n / 2;
            counter++;
        } else if (n % 2 !== 0) {
            n = n - 1;
            counter++;
        }
    }
    
    return counter
};