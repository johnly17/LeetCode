/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    if (s.length === 0) {
        return 0;
    }
    
    let maxPower = 1;
    let currentPower = 1;
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            currentPower++;
        } else {
            maxPower = Math.max(maxPower, currentPower);
            currentPower = 1;
        }
    }
    
    return Math.max(maxPower, currentPower)
};