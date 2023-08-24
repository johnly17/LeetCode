/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let split = s.split(' ');
    let output = [];
    
    for (let i = 0; i < split.length; i++) {
        output.push(split[i].split('').reverse().join(''))
    }
    
    return output.join(' ')
};