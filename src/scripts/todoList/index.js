import Model from './Model.js';
import View from './View.js';
import Controller from './Controller.js';

const selectors = {
  form: '#todoForm', // контейнер форми
  todosContainer: '#todoItems', // контейнер блоків завдань
};

View.init(selectors);
Model.init();
Controller.init(selectors); // передаємо в ініт селектори
