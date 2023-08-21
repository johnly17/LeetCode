/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let split = s.split(' ')
    let sentenceArray = [];
    
    for (let i = 0; i < split.length; i++) {
        let idx = split[i].slice(-1) -1;
        sentenceArray[idx] = split[i].slice(0, -1); 
    }
    return sentenceArray.join(" ")
    
};