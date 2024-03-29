function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
};

const num1 = 5;
const num2 = 3;

const sum = add(num1, num2);
document.write(`${sum}\n`);

const difference = subtract(num1, num2);
document.write(`${difference}\n`);

const product = multiply(num1, num2);
document.write(`${product}\n`);
console.log(multiply(num1, num2));
