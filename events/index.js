
const btn = document.querySelector('#btn');
const img = document.getElementById('img');

btn.addEventListener('click', () => {
    // dans la fonction
    img.classList.toggle('show');
})