const palindromes = function (word) {
    const re = /[\W_]/g;
    let tidyWord = word.toLowerCase().replace(re,"");
    reverseWord = tidyWord.split("").reverse().join("");
    return reverseWord === tidyWord;
};

// Do not edit below this line
module.exports = palindromes;
