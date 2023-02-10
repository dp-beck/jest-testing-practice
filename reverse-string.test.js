const reverseString = require('./reverse-string');

test('happy path', () => {
    expect(reverseString('Hello')).toBe('olleH');
});

test('with leading whitespace', () => {
    expect(reverseString(' Hello')).toBe('olleH ');
});

test('with commas', () => {
    expect(reverseString('Hello, World!')).toBe('!dlroW ,olleH');
});