/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richest = 0;
    
    for (i = 0; i < accounts.length; i++) {
        let temp = 0;
        for (let j=0; j<accounts[i].length; j++) {
            temp += accounts[i][j];
        }
        richest = Math.max(richest, temp);
    }
    return richest;
};