function reverseString(string) {
    let initialValue = '';
    return string.split('').reverse().reduce(
        (prev, cur) => prev.concat('', cur),
        initialValue 
    );
}

module.exports = reverseString;