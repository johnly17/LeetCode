/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let split = s.split('')
    let result = '';
    
    for (let i = 0; i < split.length; i++) {
        if (split[i] === 'i') {
            result = result.split('').reverse().join('')
        } else {
            result += split[i];
        }
    }
    return result;
};