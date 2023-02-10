const analyzeArray = require('./analyze-array');

test('happy path', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('happy path with negative integers', () => {
    expect(analyzeArray([1,8,-3,4,2,-6])).toEqual({
        average: 1,
        min: -6,
        max: 8,
        length: 6
    });
});

test('0 array', () => {
    expect(analyzeArray([0])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 1
    });
});

