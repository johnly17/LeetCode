/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
     const reversedWords = new Map();
    let maxPairs = 0;

    for (const word of words) {
        const reversed = reverseString(word);

        if (reversedWords.has(reversed) && reversedWords.get(reversed) > 0) {
            maxPairs++;
            reversedWords.set(reversed, reversedWords.get(reversed) - 1);
        } else {
            reversedWords.set(word, (reversedWords.get(word) || 0) + 1);
        }
    }

    return maxPairs;
};

function reverseString(str) {
    return str.split('').reverse().join('');
}