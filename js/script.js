(function () {
  const toDoList = () => {
    const submit = document.querySelector('[data-submit]');
    const removeAll = document.querySelector('[data-remove-all]');
    const allInputs = document.querySelectorAll('textarea, input');
    const toDoItemsContainer = document.querySelector('#todoItems');
    let currentId = 1;

    const getData = () => {
      const data = JSON.parse(localStorage.getItem('data-item'));
      return data || [];
    };
    const savedItemInLS = (data) => {
      data.id = currentId;
      currentId++;
      const savedItems = getData();
      savedItems.push(data);
      localStorage.setItem('data-item', JSON.stringify(savedItems));
      return data;
    };
    const createToDoBlock = (data) => {
      const wrapper = document.createElement('div');
      wrapper.setAttribute('data-todo-id', data.id);
      wrapper.className = 'col-4';

      wrapper.innerHTML = ` 
                         <div class="taskWrapper">
                            <div class="taskHeading" data-title>#${data.id} ${data.title}</div>
                            <div class="taskDescription" data-task>${data.description}</div>
                            <hr>
                            <button class="btn btn-danger btn-sm" data-remove-btn>Remove</button>
                        </div>`;
      return wrapper;
    };

    const handler = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const dataInput = {};

      allInputs.forEach((element) => {
        dataInput[element.name] = element.value;
      });

      const savedItem = savedItemInLS(dataInput, currentId);
      const toDoItemHTML = createToDoBlock(savedItem);
      toDoItemsContainer.prepend(toDoItemHTML);

      allInputs.forEach((element) => {
        element.value = '';
      });
    };

    const loadedHandler = () => {
      const savedItems = getData();
      if (!savedItems.length) return;
      currentId = savedItems[savedItems.length - 1].id + 1;

      savedItems.forEach((item) => {
        const toDoItemHTML = createToDoBlock(item);
        toDoItemsContainer.prepend(toDoItemHTML);
      });
    };

    const handlerRemoveToDo = (event) => {
      event.stopPropagation();
      if (!event.target.hasAttribute('data-remove-btn')) return;
      const currentWrapper = event.target.closest('[data-todo-id]');
      const todoId = Number(currentWrapper.getAttribute('data-todo-id'));

      const savedData = getData();
      const dataToSave = savedData.filter((item) => item.id !== todoId);

      localStorage.setItem('data-item', JSON.stringify(dataToSave));
      currentWrapper.remove();
    };
    const handlerRemoveAll = () => {
      localStorage.removeItem('data-item');
      toDoItemsContainer.innerHTML = '';
    };

    document.addEventListener('DOMContentLoaded', loadedHandler);
    submit.addEventListener('click', handler);
    toDoItemsContainer.addEventListener('click', handlerRemoveToDo);
    removeAll.addEventListener('click', handlerRemoveAll);
  };
  toDoList();
})();
