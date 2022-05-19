const { canSegmentString } = require('../07-can-segment-string');

let dictionary;

beforeEach(() => {
    dictionary = ['apples', 'apple', 'pear', 'pie'];
});

it('returns true if found', () => {
    expect(canSegmentString('applepear', dictionary)).toBeTruthy();
});

it('returns false if not found', () => {
    expect(canSegmentString('applepeard', dictionary)).toBeFalsy();
});
