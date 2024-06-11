(function () {
  const users = {
    data: {
      a: 1,
      b: 2,
      c: 3,
      d: {
        a1: 1,
        b1: 2,
        c1: 3,
        d1: {
          a2: 3,
          b2: 3,
          c2: 3,
        },
      },
    },
  };
  const deepFreeze = (obj) => {
    if (Object.isFrozen(obj)) {
      return obj;
    }

    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        deepFreeze(obj[key]);
      }
    }
    return Object.freeze(obj);
  };
  deepFreeze(users);

  users.data.a = 'new value';
  console.log(users);
  console.log(Object.isFrozen(users));
})();
