const task = '----------';

console.log(`${task}indexOf`);
const arr1 = [2, 5, 9];
console.log(arr1.indexOf(2));
console.log(arr1.indexOf(7));
console.log(arr1.indexOf(9, 2));
console.log(arr1.indexOf(2, -1));
console.log(arr1.indexOf(2, -3));

console.log(`${task}function instead indexOf`);
const indexOf = function (arr, item, index = 0) {
  let pos = index;
  if (index < 0) pos += arr.length;
  pos = pos < 0 ? 0 : pos;
  for (let i = pos; i < arr.length; i++) {
    if (item === arr[i]) return i;
  }
  return -1;
};
console.log(indexOf(arr1, 2));
console.log(indexOf(arr1, 7));
console.log(indexOf(arr1, 9, 2));
console.log(indexOf(arr1, 2, -1));
console.log(indexOf(arr1, 2, -3));

console.log(`${task}lastIndexOf`);
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));

console.log(`${task}function instead lastIndexOf`);
const lastIndexOf = function (arr, item, index = arr.length - 1) {
  let pos = index;
  if (index < 0) pos += arr.length;
  pos = pos < 0 ? 0 : pos;
  for (let i = pos; i >= 0; i--) {
    if (item === arr[i]) return i;
  }
  return -1;
};
console.log(lastIndexOf(animals, 'Dodo'));

console.log(`${task}find`);
console.log(
  animals.find(function (item) {
    return item === 'Dodo';
  }),
);

console.log(`${task}function instead find`);
const find = function (arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return item;
  }
  return undefined;
};
console.log(find(animals, 'Dodo'));

console.log(`${task}findIndex`);
console.log(
  animals.findIndex(function (index) {
    return index === 'Tiger';
  }),
);

console.log(`${task}function instead findIndex`);
const findIndex = function (arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) return i;
  }
  return undefined;
};
console.log(findIndex(animals, 'Tiger'));

console.log(`${task}includes`);
console.log(animals.includes('Dodo', 2));

console.log(`${task}function instead includes`);
const includes = function (arr, item, index) {
  let pos = index;
  if (index < 0) pos += arr.length;
  pos = pos < 0 ? 0 : pos;
  for (let i = pos; i < arr.length; i++) {
    if (item === arr[i]) return true;
  }
  return false;
};
console.log(includes(animals, 'Dodo', 2));

console.log(`${task}every`);
const arrNotEvery = [12, 5, 8, 130, 44];
const arrIsEvery = [12, 54, 18, 130, 44];
console.log(
  arrNotEvery.every(function (eachItems) {
    return eachItems >= 10;
  }),
);
console.log(
  arrIsEvery.every(function (eachItems) {
    return eachItems >= 10;
  }),
);

console.log(`${task}function instead every`);
const every = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 10) return false;
  }
  return true;
};
console.log(every(arrNotEvery));
console.log(every(arrIsEvery));

console.log(`${task}some`);

const arrNotSome = [2, 5, 8, 1, 4];
const arrIsSome = [12, 5, 8, 1, 4];
console.log(
  arrNotSome.some(function (oneOfItems) {
    return oneOfItems > 10;
  }),
);
console.log(
  arrIsSome.some(function (oneOfItems) {
    return oneOfItems > 10;
  }),
);

console.log(`${task}function instead some`);
const some = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) return true;
  }
  return false;
};
console.log(some(arrNotSome));
console.log(some(arrIsSome));
