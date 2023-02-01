const fibonacci = function(x) {
    Number(x);
    if (x < 0) return "OOPS";
    let numA = 0;
    let numB = 1;
    let numC = 0;
    for (i = 1; i < x; ++i){
        numC = numB;
        numB = numA + numB;
        numA = numC;    
    }
    return numB;
};

// Do not edit below this line
module.exports = fibonacci;
