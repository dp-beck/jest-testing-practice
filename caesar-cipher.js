function caesarCipher(string, shift) {
    const stringAsArray = string.split('');
    const arrayOfCharCodes = stringAsArray.map((char) => {
        return char.charCodeAt(0);
    });
    
    const shiftedCharCodeArray = arrayOfCharCodes.map((charCode) => {
        if ((charCode >= 65 && charCode <= 90) && (charCode + shift > 90)) {return (charCode + shift) - 26;};
        if ((charCode >= 65 && charCode <= 90) && (charCode + shift < 65)) {return (charCode + shift) + 26;};
        if ((charCode >= 97 && charCode <= 122) && (charCode + shift > 122)) {return (charCode + shift) - 26;};
        if ((charCode >= 97 && charCode <= 122) && (charCode + shift < 97)) {return (charCode + shift) + 26;};
        if (!(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {return charCode;};
        return charCode + shift;
    });

    const shiftedStringAsArray = shiftedCharCodeArray.map((shiftedCharCode) => {
        return String.fromCharCode(shiftedCharCode);
    });

    let initialValue = '';
    const encryptedString = shiftedStringAsArray.reduce(
        (prev, cur) => prev.concat('', cur),
        initialValue
    );

    return encryptedString;
}




module.exports = caesarCipher;