/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const newWord = [];

    const smallerWord = word1.length > word2.length ? word2 : word1;

    const word1Split = word1.split('');
    const word2Split = word2.split('');

    while (newWord.length <= smallerWord.length * 2){
        newWord.push(word1Split.shift());
        newWord.push(word2Split.shift());
    }

    const longerWord = word1Split.length ? word1Split : word2Split;

    return newWord.join('').concat(longerWord.join(''));
};