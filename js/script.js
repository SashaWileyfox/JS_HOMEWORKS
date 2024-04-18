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
const myBind = function(arr, hello, punctuation){
  return hello + ' ' + this + punctuation;

}
