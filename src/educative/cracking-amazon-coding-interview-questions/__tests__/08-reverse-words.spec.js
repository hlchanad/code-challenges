const { reverseWords } = require('../08-reverse-words');

it('reverses the sentence', () => {
    expect(reverseWords('Hello World')).toBe('World Hello');
});
