const { myPow } = require('../50-pow-x-n');

it('returns 1 if n == 0', () => {
    expect(myPow(10, 0)).toBe(1);
});

it('calculates power', () => {
    expect(myPow(2, 4)).toBe(16);
    expect(myPow(2, -4)).toBe(0.0625);
});

it('calculates super large power', () => {
    expect(myPow(0.00001, 2147483647)).toBe(0);
    expect(myPow(1, 2147483647)).toBe(1);
    expect(myPow(1.0000000001, 2147483647).toFixed(7)).toBe('1.2395500');
    expect(myPow(1.0000000001, -2147483648).toFixed(7)).toBe('0.8067444');
});
