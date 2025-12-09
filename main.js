/*
  Name: Hrigdev Thapa
  File: main.js
  Date: 2025-12-08
  Description: JavaScript functionality for toggling comments and submitting new comments.
*/

// SHOW/HIDE COMMENTS (keyboard accessible)

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.addEventListener('click', toggleComments);

// Enable Enter key
showHideBtn.addEventListener('keypress', function(e) {
  if (e.key === "Enter") {
    toggleComments();
  }
});

function toggleComments() {
  if (commentWrapper.style.display === 'none') {
    commentWrapper.style.display = 'block';
    showHideBtn.textContent = 'Hide comments';
  } else {
    commentWrapper.style.display = 'none';
    showHideBtn.textContent = 'Show comments';
  }
}

// COMMENT FORM HANDLING

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  submitComment();
});

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  namePara.textContent = nameField.value;
  commentPara.textContent = commentField.value;

  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  list.appendChild(listItem);

  nameField.value = '';
  commentField.value = '';
}
