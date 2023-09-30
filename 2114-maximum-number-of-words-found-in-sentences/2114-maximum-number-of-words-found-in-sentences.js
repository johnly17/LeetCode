/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let highest = 0;
    
    for (let i = 0; i < sentences.length; i++) {
        const split = sentences[i].split(" ")
        if (split.length > highest) {
            highest = split.length;
        }
    }
    
    return highest
};