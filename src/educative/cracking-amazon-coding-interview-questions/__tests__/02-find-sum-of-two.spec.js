const { findSumOfTwo } = require('../02-find-sum-of-two');

let array = [];

beforeEach(() => {
    array = [5, 7, 1, 2, 8, 4, 3];
})

it('returns true if found', () => {
    expect(findSumOfTwo(array, 10)).toBeTruthy();
});

it('returns false if not found', () => {
    expect(findSumOfTwo(array, 19)).toBeFalsy();
});
