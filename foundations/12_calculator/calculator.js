const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
	return array.reduce((acc, item)=>
    acc+item
  ,0)
};

const multiply = function(array) {
  return array.reduce((acc, item)=>
    acc*item
  ,1)
};

const power = function(base, exponent) {
	return base**exponent;
};

const factorial = function(num) {
  let acc=1;
	for(let i=1;i<=num;i++){
    acc *= i;
  }
  return acc;
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
