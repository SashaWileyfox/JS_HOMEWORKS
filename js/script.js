(function () {
  const button = document.body.querySelector('[data-button]');
  const postContainer = document.body.querySelector('[data-post-container]');

  const getComments = async (postId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      const comments = await response.json();
      console.log('Коментарі:', comments);
    } catch (error) {
      console.error('Помилка при отриманні коментарів:', error);
    }
  };

  const getValue = () => {
    try {
      const inputValue = document.getElementById('input-id').value;
      const postId = Number(inputValue);

      if (!isNaN(postId) && postId <= 100 && postId > 0) {
        const getPost = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos');

          const data = await response.json();
          const post = data.find((item) => item.id === postId);
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
            console.log('Пост з таким ідентифікатором не знайдено.');
          }
        };
        getPost();
      } else {
        throw new Error('ID має бути числом від 1 до 100');
      }
    } catch (error) {
      postContainer.innerHTML = `<p>${error.message}</p>`;
    }
  };

  button.addEventListener('click', getValue);
})();
