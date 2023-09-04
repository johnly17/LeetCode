/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sPoint = 0;
    let tPoint = 0;
    
    while (sPoint < s.length && tPoint < t.length) {
        if (s[sPoint] === t[tPoint]) {
            sPoint++;
            tPoint++;
        } else {
            tPoint++;
        }
    }
    if (sPoint === s.length) {
        return true;
    } 
    return false;
}; 