(function () {
  const eventSubmit = document.querySelector('[data-submit]');
  const form = document.querySelector('form');
  const allElements = form.querySelectorAll('input, textarea, select');
  const formData = {};

  const handler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    window.location.href = '../list.html';

    allElements.forEach((element) => {
      formData[element.name] = element.value;
    });
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  eventSubmit.addEventListener('click', handler);
})();
