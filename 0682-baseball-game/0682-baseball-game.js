/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let score = [];
    
    for (let i=0; i<operations.length; i++) {
        if (operations[i] != 'C' && operations[i] != 'D' && operations[i] != '+') {
            let value = parseInt(operations[i])
            score.push(value)
        }
        if (operations[i] === "C") {
            score.pop();
        } else if (operations[i] === "D") {
            let oValue = score[score.length - 1] * 2;
            score.push(oValue)
        } else if (operations[i] === "+") {
            let value = score[score.length - 1] + score[score.length - 2]
            score.push(value);
        }
    }
    let sum = score.reduce((acc, cur) => {return acc += cur}, 0)
    return sum;
    
};