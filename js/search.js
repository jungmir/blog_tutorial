const input = document.querySelector('.input-main');
const searchIcon = document.querySelector('.fa-search');
const body = document.body;


input.addEventListener('click', () => {
    input.style.borderColor = 'black';
    searchIcon.style.color = 'black';
});

input.addEventListener('focusout', () => {
    input.style.borderColor = 'rgb(173, 181, 189)';
    searchIcon.style.color = 'rgb(173, 181, 189)';
})