const palindromes = function (string) {
    let cleanString = string.replace(/[^\w\s]/g, '');
    cleanString = cleanString.toLowerCase();
    cleanString = cleanString.replace(/ /g, '');
    
    let reversedString = cleanString.split('').reduce((reversed, char) => char + reversed, '');
    if (reversedString == cleanString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
