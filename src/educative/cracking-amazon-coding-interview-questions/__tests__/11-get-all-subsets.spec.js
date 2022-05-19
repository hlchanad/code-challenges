const { getAllSubset } = require('../11-get-all-subsets');

let numbers;

beforeEach(() => {
    numbers = [2, 3, 4];
});

it('finds all subset', () => {
    expect(getAllSubset(numbers)).toEqual(
        expect.arrayContaining([
            [],
            [2],
            [3],
            [4],
            [2, 3],
            [2, 4],
            [3, 4],
            [2, 3, 4],
        ]),
    );
});
