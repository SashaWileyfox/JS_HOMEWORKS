const task = '----------';

console.log(`${task}factorial`);
const getFactorial = ((number) => {
  if (number === 1 || number === 0) return 1;
  return number * getFactorial(number - 1);
});
console.log(getFactorial(3));

console.log(`${task}degree`);
const degree = ((num, deg) => {
  if (num === 0) return 'error';
  if (deg === 0) return 1;
  return num * degree(num, deg - 1);
});
console.log(degree(2, 1));

console.log(`${task}sum`);
const sum = ((a, b) => {
  if (a === 0) return b;
  return sum(a - 1, ++b);
});
console.log(sum(2, 2));
