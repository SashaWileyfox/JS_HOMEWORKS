const user = {
  name: 'Sasha',
  age: 23,
};
const user2 = {
  name: 'Olha',
  age: 29,
};
const getAgeOrName = function (prefix = 'age:') {
  return prefix + ' ' + this;
};
console.log(getAgeOrName.apply(user.age));
console.log(getAgeOrName.apply(user2.name, ['name:']));

console.log('---------------myApply 1');

const myApply = function (context = this, prefix = ['age:']) {
  return prefix + ' ' + context;
};
console.log(myApply(user.age));
console.log(myApply(user.name, ['name:']));

console.log('---------------myApply 2');
const myApply2 = function (func, context, [...args]) {
  return func.call(context, [...args]);
};
const get = function (prefix) {
  return prefix + ' ' + this;
};
console.log(myApply2(get, user.name, ['name:']));
console.log(myApply2(get, user2.name, ['name:']));
