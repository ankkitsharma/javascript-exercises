const palindromes = function (string) {
    let straightString = string.toLowerCase().replace(/\W/g, '')
    let reverseString = straightString.split('').reverse().join('');
    console.log(reverseString);
    return straightString == reverseString;
};

// Do not edit below this line
module.exports = palindromes;
