const ul = document.body.firstElementChild;
const arrNameAttr = [];
const arrValue = [];
for (const attributes of ul.attributes) {
  arrNameAttr.push(attributes);
  arrValue.push(attributes.nodeValue);
}
console.log(arrNameAttr);
console.log(arrValue);

ul.lastElementChild.innerHTML = 'Hello! My name is Sasha';
ul.firstElementChild.setAttribute('data-my-name', 'Sasha');
ul.removeAttribute('data-dog-tail');
