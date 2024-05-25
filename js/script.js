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

    if (clickedButton.textContent === 'Add to favorites') {
      localStorage.setItem(clickedButton.id, JSON.stringify('Add'));
    } else {
      localStorage.setItem(clickedButton.id, JSON.stringify('Delete'));
    }
  };
  const refresh = (event) => {
    for (let i = 0; i < buttons.length; i++) {
      const value = JSON.parse(localStorage.getItem(buttons[i].id));

      if (value) {
        const currentButton = buttons[i];

        if (value === 'Add') {
          currentButton.textContent = 'Delete from favorites';
          currentButton.classList.add('btn', 'btn-danger');
        }
      }
    }
  };

  buttons.forEach((button) => {
    button.addEventListener('click', handler);
  });
  window.addEventListener('load', refresh);
})();
