/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    if (!word.includes(ch)) return word;
    
    let idx = word.indexOf(ch);
    
    return word.slice(0, idx + 1).split('').reverse().join('') + word.slice(idx + 1); 
};