const sumAll = function(x,y) {
    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0){
        return "ERROR";
    }
    if (x > y){
        let temp = x;
        x = y;
        y = temp;
    }
    let num = x;
    let sum = 0;
    for (let i = x; i <= y; i++){
        sum += num;
        num ++; 
    };
    return sum;
}
// Do not edit below this line
module.exports = sumAll;
