(function () {
  const array = [1, 2, [1.1, 1.2, 1.3], 3];

  const generateList = (arr) => {
    const list = document.createElement('ul');

    for (let i = 0; i < arr.length; i++) {
      const listItem = document.createElement('li');
      const node = document.createTextNode(arr[i]);

      listItem.append(node);
      list.appendChild(listItem);

      if (Array.isArray(arr[i])) {
        listItem.appendChild(generateList(arr[i]));
        listItem.removeChild(listItem.firstChild);
      }
    }
    return list;
  };
  console.log(generateList(array));
})();
