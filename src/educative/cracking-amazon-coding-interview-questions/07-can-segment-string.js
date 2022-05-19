/**
 *
 * @param {string} string
 * @param {string[]} dictionary
 * @return {boolean}
 */
const canSegmentString = (string, dictionary) => {
    if (string.length === 0) {
        return true;
    }

    for (let i = 0; i < dictionary.length; i++) {
        const word = dictionary[i];

        if (
            string.startsWith(word) &&
            canSegmentString(string.slice(word.length), dictionary)
        ) {
            return true;
        }
    }

    return false;
};

module.exports.canSegmentString = canSegmentString;
