const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x -y;
};

const sum = function(x,y) {
  if (x.length == 0) return 0;
  if (x.length === 1) return x[0];
  else if (x.length > 1) return x.pop()+sum(x);
  return x + y;
};

const multiply = function(array) {
  return array.length
    ? array.reduce((iterator, item) => iterator * item)
    : 0;
};

const power = function(x,y) {
	return Math.pow(x,y) ;
};

const factorial = function(x) {
  if (x === 0) return 1;
  return (x * factorial(x - 1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
