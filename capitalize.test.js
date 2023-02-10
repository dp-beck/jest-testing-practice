const capitalize = require('./capitalize');

test('capitalizes a word', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('capitalizes a single letter', () => {
    expect(capitalize('h')).toBe('H');
});

test('capitalizes a sentence', () => {
    expect(capitalize('hello cruel world.')).toBe('Hello cruel world.');
});
