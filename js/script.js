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
console.log(getAgeOrName.apply(user.name, ['name:']));

console.log('---------------myApply');
const get = function () {
  return {
    apply(context = this, prefix = ['age:']) {
      return prefix + ' ' + context;
    },
  };
};
const getting = get();
console.log(getting.apply(user2.age));
console.log(getting.apply(user2.name, ['name:']));
