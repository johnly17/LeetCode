/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const array = text.split(' ');
    let count = 0;
    
    for (const word of array) {
        let canType = true;
        
        for (const char of word) {
            if (brokenLetters.includes(char)) {
                canType = false;
                break;
            }
        }
        
        if (canType) {
            count++
        }
        
    }
    
    return count;
};