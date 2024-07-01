(function () {
  const postContainer = document.querySelector('[data-post-container]');
  const input = document.querySelector('[data-input]');

  const getComments = async (postId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      if (!response.ok) throw new Error('Network response was not ok');
      const comments = await response.json();
      console.log('Comments:', comments);
    } catch (error) {
      console.error(`Error receiving comments: ${error.message}`);
    }
  };

  const getPost = async (postId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      if (!response.ok) throw new Error('Server responded with an error');
      const post = await response.json();
      return post;
    } catch (error) {
      throw new Error(`Error while receiving the post: ${error.message}`);
    }
  };

  const renderPost = (post) => {
    postContainer.innerHTML = `
      <div class="card-body">
        <h2>${post.title}</h2>
        <h5>User ID: ${post.userId}</h5>
        <p>${post.body}</p>
        <button class="btn btn-primary" data-comments-button data-post-id="${post.id}">Get Comments</button>
      </div>
    `;
    postContainer.classList.add('card');
  };

  const handleError = (error) => {
    postContainer.innerHTML = `<p>${error.message}</p>`;
  };

  const handlePostDisplay = async () => {
    const inputValue = document.getElementById('input-id').value;
    const postId = Number(inputValue);

    try {
      if (isNaN(postId) || postId <= 0 || postId > 100) {
        throw new Error('The ID must be a number between 1 and 100');
      }

      const post = await getPost(postId);
      if (post) {
        renderPost(post);
      } else {
        throw new Error('No post with this ID was found.');
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleCommentButtonClick = (event) => {
    const commentButton = event.target.closest('[data-comments-button]');
    if (commentButton) {
      const postId = commentButton.getAttribute('data-post-id');
      getComments(postId);
    }
  };

  input.addEventListener('input', handlePostDisplay);
  postContainer.addEventListener('click', handleCommentButtonClick);
})();
