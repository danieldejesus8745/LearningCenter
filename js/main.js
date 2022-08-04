const post1 = document.getElementById('post1');
const post2 = document.getElementById('post2');

post1.addEventListener('click', () => {
  location.href = 'pages/post1/';
});

post2.addEventListener('click', () => {
  location.href = 'pages/post2/';
});