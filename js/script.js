(function () {
  const arr = ['one', 'two', 'three', 'four'];
  const iterator = (obj) => {
    const dataToArr = Array.from(obj);
    let index = 0;

    return {
      next() {
        let done = false;
        if (index + 1 > dataToArr.length) {
          done = true;
        }

        const result = {
          value: dataToArr[index],
          done,
        };
        index += 1;
        return result;
      },
    };
  };

  const itr = iterator(arr);
  console.log(itr.next());
  console.log(itr.next());
  console.log(itr.next());
  console.log(itr.next());
  console.log(itr.next());
})();
