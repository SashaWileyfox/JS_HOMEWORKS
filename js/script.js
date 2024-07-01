(function () {
  const button = document.body.querySelector('[data-button]');
  const postContainer = document.body.querySelector('[data-post-container]');

  const getComments = async (postId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      if (!response.ok) throw new Error('Network response was not ok');
      const comments = await response.json();
      console.log('Comments:', comments);
    } catch (error) {
      console.error(`Error receiving comments:, ${error.message}`);
    }
  };

  const getPost = async (postId) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) throw new Error('Server responded with an error');
      const data = await response.json();
      return data.find((item) => item.id === postId);
    } catch (error) {
      throw new Error(`Error while receiving the post: + ${error.message}`);
    }
  };

  const getValue = async () => {
    try {
      const inputValue = document.getElementById('input-id').value;
      const postId = Number(inputValue);

      if (isNaN(postId) || postId <= 0 || postId > 100) {
        throw new Error('The ID must be a number between 1 and 100');
      }

      const post = await getPost(postId);

      if (post) {
        postContainer.innerHTML = `
          <h2>${post.title}</h2>
          <h4>User ID: ${post.userId}</h4>
          <p>${post.body}</p>
        `;
        const commentButton = document.createElement('button');
        commentButton.textContent = 'Get a comments';
        commentButton.addEventListener('click', () => getComments(post.id));
        postContainer.appendChild(commentButton);
      } else {
        throw new Error('No post with this ID was found.');
      }
    } catch (error) {
      postContainer.innerHTML = `<p>${error.message}</p>`;
    }
  };

  button.addEventListener('click', getValue);
})();
