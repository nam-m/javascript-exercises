const palindromes = function (str) {
    let newStr = str.toLowerCase().replace(/\W/g, '');
    // console.log(newStr);
    return (
        newStr.split('')
              .reverse()
              .join('') == newStr
    );
};

// Do not edit below this line
module.exports = palindromes;
