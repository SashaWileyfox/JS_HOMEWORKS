const Controller = {
  /* приватні властивості об’єкта Controller. Вони ініціалізуються як null і будуть використовуватися для збереження селекторів та DOM-елементів. */
  _formSelector: null,
  _todosContainerSelector: null,
  _formElement: null,
  _todosContainerElement: null,

  /* цей метод призначений для ініціалізації об’єкта Controller з переданими селекторами, але в даному фрагменті коду він лише виводить поточний об’єкт this у консоль. */
  init({ form, todosContainer }) {
    this.formSelector = form;
    this.todosContainerSelector = todosContainer;
    this.setEvents();

    this.formHandler = this.formHandler.bind(this);
  },

  setEvents() {
    this.formSelector.addEventListener('submit', this.formHandler);
  },

  formHandler() {
    console.log('dog');
  },

  /* перевіряє, чи є переданий селектор рядком, не порожнім і чи існує відповідний елемент у DOM. */
  validateSelector(selector) {
    if (typeof selector !== 'string') throw new Error('selector should be a string');
    if (selector.trim() === '') throw new Error('selector should not be empty');

    const element = document.querySelector(selector);

    if (element === null) throw new Error('selector not found im DOM');
  },
  /* Сеттери: formSelector та todosContainerElement призначені для встановлення селектора та пошуку відповідного елемента у DOM. Вони також викликають validateSelector для перевірки селектора. */
  set formSelector(selector) {
    this.validateSelector(selector); // Викликається метод validateSelector з переданим селектором. Цей метод                                           перевіряє, чи є селектор допустимим (хоча сам метод не н адано у                                                фрагменті коду).
    this._formSelector = selector; // Приватна властивість _formSelector оновлюється переданим селектором.
    this._formElement = document.querySelector(selector); // Виконується пошук DOM-елемента за селектором, і знайдений елемент зберігається у приватну властивість _formElement.
  },
  /* Це сетер для властивості _todosContainerElement. Коли ви встановлюєте цю властивість, аналогічно до попереднього сетера: */
  set todosContainerSelector(selector) {
    this.validateSelector(selector); // Перевіряється допустимість селектора.
    this._todosContainerSelector = selector; // Оновлюється приватна властивість _todosContainerSelector
    this._todosContainerElement = document.querySelector(selector); // Здійснюється пошук DOM-елемента за селектором і збереження його у приватну властивість _todosContainerElement.
  },
  /* Геттери: todosContainerElement, formSelector, todosContainerSelector, formElement повертають значення приватних властивостей. */
  get todosContainerElement() {
    return this._todosContainerElement;
  },
  get formSelector() {
    return this._formSelector;
  },
  get todosContainerSelector() {
    return this._todosContainerSelector;
  },
  get formElement() {
    return this._formElement;
  },
};

export default Controller;
