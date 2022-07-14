const { isLongPressedName } = require('../925-long-pressed-name');

it('returns true if same name', () => {
    expect(isLongPressedName('alex', 'alex')).toBeTruthy();
});

it('returns true if long pressed name', () => {
    expect(isLongPressedName('alex', 'aleex')).toBeTruthy();
    expect(isLongPressedName('saeed', 'saeeeed')).toBeTruthy();
});

it('returns false if not long pressed name', () => {
    expect(isLongPressedName('alex', 'ale')).toBeFalsy();
    expect(isLongPressedName('saeede', 'saeeeed')).toBeFalsy();
});
