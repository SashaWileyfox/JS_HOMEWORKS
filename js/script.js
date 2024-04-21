const user = {
  name: 'Sasha',
  age: 23,
};
const user2 = {
  name: 'Olha',
  age: 29,
};
const getHelloName = function (hello, punctuation) {
  return hello + ' ' + this + punctuation;
};
const fixValue = getHelloName.bind(user.name, 'Привіт');
const fixValue2 = getHelloName.bind(user2.name, 'Привіт');

console.log(fixValue('!'));
console.log(fixValue2('.'));

console.log('---------------myBind');

const myBind = function (func, context, ...args) {
  return function (...newArgs) {
    return func.call(context, ...args, ...newArgs);
  };
};

const split = function (hello, punctuation) {
  return hello + ' ' + this + punctuation;
};

const getHelloNameMyBind = myBind(split, user.name, 'Привіт');
const getHelloNameMyBind2 = myBind(split, user2.name, 'Привіт');

console.log(getHelloNameMyBind('!'));
console.log(getHelloNameMyBind2('.'));
