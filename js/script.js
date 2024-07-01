(function () {
  const button = document.body.querySelector('[data-button]');
  const postContainer = document.body.querySelector('[data-post-container]');

  const getComments = async (postId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      if (!response.ok) throw new Error('Network response was not ok');
      const comments = await response.json();
      console.log('Коментарі:', comments);
    } catch (error) {
      console.error('Помилка при отриманні коментарів:', error);
    }
  };

  const getPost = async (postId) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data.find((item) => item.id === postId);
    } catch (error) {
      console.error('Помилка при отриманні поста:', error);
    }
  };

  const getValue = async () => {
    try {
      const inputValue = document.getElementById('input-id').value;
      const postId = Number(inputValue);

      if (isNaN(postId) || postId <= 0 || postId > 100) {
        throw new Error('ID має бути числом від 1 до 100');
      }

      const post = await getPost(postId);

      if (post) {
        postContainer.innerHTML = `
          <h2>${post.title}</h2>
          <p>ID користувача: ${post.userId}</p>
          <p>Завершено: ${post.completed ? 'Так' : 'Ні'}</p>
        `;
        const commentButton = document.createElement('button');
        commentButton.textContent = 'Отримати коментарі';
        commentButton.addEventListener('click', () => getComments(post.id));
        postContainer.appendChild(commentButton);
      } else {
        throw new Error('Пост з таким ідентифікатором не знайдено.');
      }
    } catch (error) {
      postContainer.innerHTML = `<p>${error.message}</p>`;
    }
  };

  button.addEventListener('click', getValue);
})();
