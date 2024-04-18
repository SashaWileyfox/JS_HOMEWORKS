const user = {
  name: 'Sasha',
  age: 23,
};
const user2 = {
  name: 'Olha',
  age: 29,
};
const getAge = function (prefix = 'age:') {
  return prefix + ' ' + this;
};
console.log(getAge.apply(user.age));
console.log(getAge.apply(user2.name, ['name:']));

console.log('---------------myApply');
const myApply = function (arr, prefix = 'age:') {
  return prefix + ' ' + arr;
};
console.log(myApply(user.age));
console.log(myApply(user.name, 'name:'));
