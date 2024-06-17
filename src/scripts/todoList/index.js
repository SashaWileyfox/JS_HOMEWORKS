// eslint-disable-next-line import/extensions
import Model from './Model.js';
import View from './View.js';
import Controller from './Controller.js';

const selectors = {
  form: '#todoForm', // контейнер форми
  todosContainer: '#todoItems', // контейнер блоків завдань
};
Controller.init(selectors); // передаємо в ініт селектори
