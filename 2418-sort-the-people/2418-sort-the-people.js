/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let n = names.length;
    let nameHeightPairs = [];
    
    for (let i = 0; i < n; i++) {
        nameHeightPairs.push([names[i], heights[i]])
    }
    
    nameHeightPairs.sort((a, b) => b[1] - a[1]);
     
    const result = [];
    
    for (let i = 0; i < n; i++) {
        result.push(nameHeightPairs[i][0])
    }
    
    return result;
    
    
    
};