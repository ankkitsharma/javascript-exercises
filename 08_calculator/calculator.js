const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  for(const item of array) {
    sum += item;
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for(const item of array) {
    product *= item;
  }
  return product;
};

const power = function(num1, num2) {
  if(num2 !== 0)
    return(num1 * power(num1, num2 - 1));
  else
    return 1;
};

const factorial = function(num) {
	if(num !== 0)
    return num * factorial(num - 1);
  else
    return 1;
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
