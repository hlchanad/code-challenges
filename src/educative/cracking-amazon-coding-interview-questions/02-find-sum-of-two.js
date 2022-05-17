/**
 *
 * @param {number[]} array
 * @param {number} sum
 * @return {boolean}
 */
module.exports.findSumOfTwo = (array, sum) => {
    const map = {};

    for (let i = 0; i < array.length; i++) {
        map[array[i]] = true;

        if (!!map[sum - array[i]]) {
            return true;
        }
    }

    return false;
}
