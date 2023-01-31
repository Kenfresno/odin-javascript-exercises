const reverseString = function(wrd) {
    let reversedWrd = "";
    const wordLength = wrd.length;
    for (let i = 0; i <= wordLength; i++){
        reversedWrd += wrd.slice(-1);
        wrd = wrd.slice(0,-1);
    }
    return reversedWrd;
};

// Do not edit below this line
module.exports = reverseString;
