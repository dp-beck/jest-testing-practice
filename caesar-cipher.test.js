const caesarCipher = require('./caesar-cipher');

test("happy path", () => {
    expect(caesarCipher('Hello', 1)).toBe('Ifmmp');
});

test("wraps from z to a", () => {
    expect(caesarCipher('Zipper', 1)).toBe('Ajqqfs');
});

test('does not shift punctuation', () => {
    expect(caesarCipher('Hello, world!', 1)).toBe('Ifmmp, xpsme!');
});

test("wraps from a to z", () => {
    expect(caesarCipher('Abc', -1)).toBe('Zab');
})
