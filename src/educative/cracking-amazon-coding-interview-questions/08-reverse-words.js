/**
 *
 * @param {string} sentence
 * @return {string}
 */
const reverseWords = (sentence) => {
    const spaceIndex = sentence.indexOf(' ');

    if (spaceIndex === -1) {
        return sentence;
    }

    const first = sentence.slice(0, spaceIndex);
    const rest = sentence.slice(spaceIndex + 1);

    return reverseWords(rest) + ' ' + first;
};

module.exports.reverseWords = reverseWords;
