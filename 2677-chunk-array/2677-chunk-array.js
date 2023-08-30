/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let resultArr = [];
    
    for (let i = 0; i < arr.length; i += size) {
        const chunked = arr.slice(i, i + size);
        resultArr.push(chunked);
    }
    
    return resultArr;
};
