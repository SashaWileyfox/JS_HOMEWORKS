(function () {
  const user = {
    name: 'Sasha',
    age: 23,
  };

  const myCall = function (ctx = this, args = 'name: ') {
    return args + ctx;
  };
  console.log(myCall(user.age, 'age: '));

  const myBind = function (ctx = this, args = 'Hello, ') {
    return function () {
      return myCall(ctx, args);
    };
  };
  console.log(myBind(user.name, 'Good morning, ')());
})();
