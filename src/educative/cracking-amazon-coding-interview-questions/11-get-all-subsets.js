/**
 *
 * @param {number[]} numbers
 * @return {number[][]}
 */
module.exports.getAllSubset = (numbers) => {
    const result = [[]];

    for (let i = 0; i < numbers.length; i ++) {
        const size = result.length;
        for (let j = 0; j < size; j ++) {
            result.push([...result[j], numbers[i]]);
        }
    }

    return result;
};
