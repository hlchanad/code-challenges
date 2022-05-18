const { exists } = require('../79-word-search');

let board;

beforeEach(() => {
    board = [
        ['A', 'B', 'C', 'D'],
        ['E', 'F', 'G', 'H'],
        ['I', 'J', 'K', 'L'],
    ];
});

it('returns true if found', () => {
    expect(exists(board, 'ABCGKJ')).toBeTruthy();
    expect(exists(board, 'HLK')).toBeTruthy();
});

it('returns false if not found', () => {
    expect(exists(board, 'ABCB')).toBeFalsy();
});

describe('edge cases', () => {
    it('return true in edge case #1', () => {
        const board = [
            ['C', 'A', 'A'],
            ['A', 'A', 'A'],
            ['B', 'C', 'D'],
        ];
        const word = 'AAB';
        expect(exists(board, word)).toBeTruthy();
    });
});
