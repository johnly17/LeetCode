/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let allowedSet = new Set(allowed);
    
    let count = 0;
    
    for (const word of words) {
        let consistent = true;
        
        for (const char of word) {
            if (!allowedSet.has(char)) {
                consistent = false;
                break;
            }
        }
        
        if (consistent) {
            count++;
        }
    
    }
    
    return count;
    
};