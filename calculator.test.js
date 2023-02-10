const calculator = require('./calculator');

test("basic add", () => {
    expect(calculator.add(2, 4)).toBe(6);
});

test("adding with decimal points", () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("basic subtract", () => {
    expect(calculator.subtract(4, 2)).toBe(2);
});

test("subtracting with decimal points", () => {
    expect(calculator.subtract(0.3, 0.1)).toBeCloseTo(0.2);
});

test("basic multiply", () => {
    expect(calculator.multiply(2, 4)).toBeCloseTo(8);
});

test("multiplying with decimal points", () => {
    expect(calculator.multiply(0.2, 0.1)).toBeCloseTo(0.02);
});

test("basic divide", () => {
    expect(calculator.divide(4, 2)).toBeCloseTo(2);
});

test("dividing with decimal points", () => {
    expect(calculator.divide(0.2, 0.1)).toBeCloseTo(2);
});
