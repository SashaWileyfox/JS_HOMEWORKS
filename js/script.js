'use strict';

const arr = [1, 2, 3, -1, -2, -3];

const foo = function (arr = []) {
    const fooArr = [];

    for (let a = 0; a < arr.length; a++) {
        if (arr[a] < 0) continue;
        if (arr[a] > 0) fooArr.push(arr[a]);
    }

    if (fooArr.length > 0) {
        return fooArr.join(', ')
    } else {
        return 'Empty array'
    }


}
console.log(foo(arr));
