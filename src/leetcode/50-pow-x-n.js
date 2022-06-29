/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }

    x = n > 0 ? x : (1/x);
    n = Math.abs(n);

    // find the max power just smaller than n
    // in worst case, there might be still (half - 1) power

    let result = x;
    let power = 1;
    while (power * 2 < n) {
        result *= result;
        power *= 2;
    }

    // then repeat this whole procedure until n reaches 0

    return result * myPow(x, n - power);
};

module.exports.myPow = myPow;
