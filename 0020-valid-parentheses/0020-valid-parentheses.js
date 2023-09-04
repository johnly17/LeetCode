/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for (const char of s) {
        if (brackets[char]) {
            // If it's an opening bracket, push it onto the stack.
            stack.push(char);
        } else {
            // If it's a closing bracket, pop the stack and check if it matches.
            const lastBracket = stack.pop();
            if (brackets[lastBracket] !== char) {
                return false; // Mismatched brackets.
            }
        }
    }

    // If the stack is empty, the string is valid.
    return stack.length === 0;
};