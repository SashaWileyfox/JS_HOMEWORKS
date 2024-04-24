const sum = () => {
  let counter = 0;
  return {
    getValue(num) {
      counter += num;
      return counter;
    },
  };
};
const result = sum(0);

console.log(result.getValue(5));
console.log(result.getValue(3));
console.log(result.getValue(20));
