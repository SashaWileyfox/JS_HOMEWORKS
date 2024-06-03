(function() {
  const toDoList = () => {
//дістаємо всі необхідні елементи
    const submit = document.querySelector('[data-submit]');
    const removeAll = document.querySelector('[data-remove-all]');
    const form = document.querySelectorAll('textarea, input');
    const todoItemContainer = document.querySelectorAll('#todoItems');

//створюємо змінну яка буде створювати ід
    let currentId = 1;

// функція яка гарантує що ми отримаємо дані з localStorage в масиві, а якщо localStorage пустий то порожній масив
    const getData = () => {
      const data = JSON.parse(localStorage.getItem('data-item')); // Спроба отримати дані з localStorage

      return data || []; // Якщо дані існують, повернути їх, інакше повернути порожній масив

    };

//Функція savedItemInLS працює в парі з getData. Якщо getData повертає порожній масив (що означає, що localStorage пустий або не містить ключа 'data-item'), то savedItemInLS почне створювати новий масив, додаючи об’єкт з id починаючи з 1. Якщо ж getData повертає існуючий масив з даними, то savedItemInLS продовжить додавати нові об’єкти до цього масиву, збільшуючи id для кожного нового об’єкта. (Збереження нових даних: Після додавання нового об’єкта до масиву, оновлений масив зберігається назад у localStorage.)
    const saveItemInLS = (data) => {
      data.ID = currentId;
      currentId++;
      const savedItemsBefore = getData(); // Отримання масиву збережених об'єктів
      savedItemsBefore.push(data); // Додавання нового об'єкту до масиву
      localStorage.setItem('data-item', JSON.stringify(savedItemsBefore)); // Збереження оновленого масиву у localStorage
      return data; // Повернення об'єкту з новим id
    };

    submit.addEventListener('click', handler);
  };
  toDoList();
})();
