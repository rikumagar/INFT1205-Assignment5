/*
  Name: Hrigdev Thapa
  File: main.js
  Date: 2025-12-08
  Description: Handles comment toggling and form submission with keyboard accessibility.
*/

// =====================================================
// SHOW / HIDE COMMENTS — Keyboard Accessible
// =====================================================

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Hide comments at start
commentWrapper.style.display = 'none';

// Click toggles comments
showHideBtn.addEventListener('click', toggleComments);

// Enter key toggles comments (keyboard accessibility)
showHideBtn.addEventListener('keypress', function (e) {
  if (e.key === "Enter") toggleComments();
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

// =====================================================
// ADD NEW COMMENT TO LIST
// =====================================================

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

// Prevent reload and process form
form.addEventListener('submit', function (e) {
  e.preventDefault();
  submitComment();
});

function submitComment() {
  const li = document.createElement('li');
  const nameText = document.createElement('p');
  const commentText = document.createElement('p');

  nameText.textContent = nameField.value;
  commentText.textContent = commentField.value;

  li.appendChild(nameText);
  li.appendChild(commentText);
  list.appendChild(li);

  // Clear form
  nameField.value = "";
  commentField.value = "";
}
