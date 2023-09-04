/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    function sumDigits(n) {
        return n.toString().split('').map(Number).reduce((a,b) => a + b, 0);
    }
    
    console.log(sumDigits(38),":"+" should equal 11")
    
    let result = num;
    
    do {
        result = sumDigits(result)
    } while (result.toString().split('').length > 1)
    
        return result;
};