const bodyChild = document.body.firstElementChild;
const list = bodyChild.children;
let count = 0;
const arr = [];
for (const element of list) {
  if (element instanceof HTMLElement) {
    count += 1;
    console.log(element);
    arr.push(element.textContent);
  }
}
console.log('amount of elements:', count);
