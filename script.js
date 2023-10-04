const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.toggle('show-nav'));
close.addEventListener('click', () => container.classList.toggle('show-nav'));

// Toggle is used to add if element not present and remove if already present
// open.addEventListener('click',() => container.classList.add('show-nav'))
// close.addEventListener('click',() => container.classList.remove('show-nav'))