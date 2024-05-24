(function () {
  const buttons = document.querySelectorAll('[data-button]');

  buttons.forEach((button, index) => {
    button.id = `button${index}`;
  });

  const handler = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const clickedButton = event.target;
    event.target.parentElement.style.display = 'none';

    if (clickedButton.textContent === 'Add') {
      localStorage.setItem(clickedButton.id, JSON.stringify('Add'));
    } else {
      localStorage.setItem(clickedButton.id, JSON.stringify('Delete'));
    }
  };
  const refresh = (event) => {
    for (let i = 0; i < buttons.length; i++) {
      const value = JSON.parse(localStorage.getItem(buttons[i].id));
      if (value) {
        const parentContainer = buttons[i].closest('[data-buttons-container]');
        parentContainer.style.display = 'none';

        const p = document.createElement('p');

        if (value === 'Add') {
          p.textContent = 'Цей елемент було додано до обраного';
          p.classList.add('text-success', 'border-bottom', 'border-success');
        } else {
          p.textContent = 'Цей елемент було видалено з обраного';
          p.classList.add('text-danger', 'border-bottom', 'border-dander');
        }
        parentContainer.parentElement.appendChild(p);
      }
    }
  };

  buttons.forEach((button) => {
    button.addEventListener('click', handler);
  });
  window.addEventListener('load', refresh);
})();
