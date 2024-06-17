import Model from './Model.js';
import View from './View.js';
/* global bootstrap */

const Controller = {
  _formSelector: null,
  _todosContainerSelector: null,
  _formElement: null,
  _todosContainerElement: null,
  offCanvas: null,

  init({
    form,
    todosContainer,
  }) {
    this.formSelector = form;
    this.todosContainerSelector = todosContainer;
    this.formHandler = this.formHandler.bind(this);
    this.loadedHandler = this.loadedHandler.bind(this);
    this.viewHandler = this.viewHandler.bind(this);

    this.setEvents();
  },

  setEvents() {
    this.formElement.addEventListener('submit', this.formHandler);
    document.addEventListener('DOMContentLoaded', this.loadedHandler);
    this.todosContainerElement.addEventListener('click', this.removeHandler);
    this.todosContainerElement.addEventListener('click', this.viewHandler);
  },

  formHandler(event) {
    event.preventDefault();
    event.stopPropagation();

    let data = Array.from(event.target.querySelectorAll('input, textarea, select'))
      .reduce((acc, input) => {
        acc[input.name] = input.value;
        return acc;
      }, {});
    try {
      data = Model.setData(data);
      View.renderItem(data);
      View.resetForm();
    } catch (error) {
      alert('Cannot save data - DB is full!');
    }
  },
  loadedHandler() {
    const data = Model.getData();
    data.forEach((item) => {
      View.renderItem(item);
    });
  },
  removeHandler(event) {
    event.stopPropagation();
    const { target } = event;

    const btn = target.closest('[data-btn="delete"]');
    if (!btn) return;

    const todoItemId = Number(btn.closest('[data-id]')
      .getAttribute('data-id'));
    const isRemoved = Model.removeData(todoItemId);

    if (isRemoved) {
      View.removeItem(todoItemId);
    } else {
      alert('Cannot delete todo item');
    }
  },

  viewHandler(event) {
    event.stopPropagation();
    const { target } = event;

    const btn = target.closest('[data-btn="info"]');
    if (!btn) return;

    const infoWindow = document.querySelector('#offcanvasExample');

    this.offCanvas = new bootstrap.Offcanvas(infoWindow);
    this.offCanvas.show();
  },

  validateSelector(selector) {
    if (typeof selector !== 'string') throw new Error('selector should be a string');
    if (selector.trim() === '') throw new Error('selector should not be empty');

    const element = document.querySelector(selector);

    if (element === null) throw new Error('selector not found im DOM');
  },
  set formSelector(selector) {
    this.validateSelector(selector);
    this._formSelector = selector;
    this._formElement = document.querySelector(selector);
  },
  set todosContainerSelector(selector) {
    this.validateSelector(selector);
    this._todosContainerSelector = selector;
    this._todosContainerElement = document.querySelector(selector);
  },
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
