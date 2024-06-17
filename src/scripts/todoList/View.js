const View = {
  _formSelector: null,
  _todosContainerSelector: null,
  _formElement: null,
  _todosContainerElement: null,
  offCanvas: null,
  showInfo({
    id,
    title,
    description,
  }) {
    this.offCanvas._element.querySelector('.title').innerHTML = `${title} #${id}`;
    this.offCanvas._element.querySelector('.description').innerHTML = description;
    this.offCanvas.show();
  },
  removeItem(id) {
    this.todosContainerElement.querySelector(`[data-id="${id}"]`)
      .remove();
  },
  renderItem(data) {
    const layout = this.createTemplate(data);
    this.todosContainerElement.prepend(layout); // ???
  },

  resetForm() {
    this.formElement.reset();
  },

  createTemplate({
    title,
    description,
    id,
  }) {
    const wrap = document.createElement('div');
    wrap.classList.add('col-4');
    wrap.setAttribute('data-id', id);

    wrap.innerHTML = `
               <div class="taskWrapper">
                 <div class="taskHeading fs-3"> <span class="fst-italic">#${id}</span> <span class="fw-bolder">${title}</span></div>
                 <div class="taskDescription">${description}</div>
                 <hr>
                 <div class="btn-group" role="group" aria-label="Basic example">
                   <button data-btn="delete" type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>
                   <button data-btn="info" type="button" class="btn btn-primary"><i class="bi bi-eye"></i></button>
                 </div>
               </div>`;

    return wrap;
  },

  init({
    form,
    todosContainer,
  }) {
    this.formSelector = form;
    this.todosContainerSelector = todosContainer;

    const infoWindow = document.querySelector('#offcanvasExample');
    this.offCanvas = new bootstrap.Offcanvas(infoWindow);
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
export default View;
