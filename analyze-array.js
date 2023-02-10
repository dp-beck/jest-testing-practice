function analyzeArray(array) {
    const avg = (array.reduce((prev, cur) => prev + cur))/array.length;
    const minimum = Math.min(...array);
    const maximum = Math.max(...array);
    const ln = array.length;
    const object = {
        average: avg,
        min: minimum,
        max: maximum,
        length: ln
    };

    return object;
}
module.exports = analyzeArray;