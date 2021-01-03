let loginPopUp = document.querySelector('.login-popup');
let loginBtn = document.querySelector('.login');
let body = document.body;
let bodyOpacity = document.querySelector('.body-opacity');
let exitBtn = document.querySelector('.exit-wrapper');
let searchBtn = document.querySelector('.login-search > i');
let inputBox = document.querySelector('.input-box');

loginBtn.addEventListener('click', function(event) {
    loginPopUp.style.display = 'flex';
    body.style.overflow = 'hidden';
    bodyOpacity.style.opacity = '0.2';
    event.preventDefault();
})

exitBtn.addEventListener('click', function() {
    loginPopUp.style.display = 'none';
    body.style.overflow = 'visible';
    bodyOpacity.style.opacity = '1';
})

searchBtn.addEventListener('click', function() {
    location.href = 'http://127.0.0.1:5501/search.html';
})

inputBox.addEventListener('click', () => {
    
})
console.log(inputBox)