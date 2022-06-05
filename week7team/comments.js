let commentArray = [];

function addComment() {
  const newComment = {
    name: 'hikeName',
    date: new Date(),
    content: "comment"
  };
  const comment = document.querySelector('#comment').value; 
  newComment.content = comment;
  const name = document.querySelector('#name').value;
  newComment.name = name;
  console.log(newComment);
  commentArray.push(newComment);
  console.log(commentArray);
  writeToLS('', commentArray);
}

const commentUI = `
<div id="form">
<h2>Add a comment</h2>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          placeholder="Add your comment"
        ></textarea>
        <input type="text" id="name" />
        <button type="submit" id="addComment">Add Comment</button>
        <ul id="commentList"></ul>
      </div>
      <h2>Comments</h2>
      <ul class="comments></ul>`

function commentList(element, comments) {
  element.innerHTML = '';
  comments.forEach(el => {
    let item = document.createElement('li');
    item.innerHTML = `${el.name}: ${el.comment}`;
    element.appendChild(item);
  });
}

function writeToLS(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data));
}

function readFromLS(key) {
  return JSON.parse(window.localStorage.getItem(key))
}

export default class Comments {
  constructor(comment) {
    this.comment = comment;
  }
  
  


  getAllComments() {

  }

  renderCommentList() {

  }

  filterCommentsByName() {

  }

  newComment() {
    const commentBtn = document.getElementById('addComment');
    // addComment();
    commentBtn.addEventListener('click', addComment);
    this.renderCommentList();
  }
}



