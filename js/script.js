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

console.log('---------------myApply');

const myApply = function (context = this, prefix = ['age:']) {
  return prefix + ' ' + context;
};
console.log(myApply(user.age));
console.log(myApply(user.name, ['name:']));
