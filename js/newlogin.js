let inputLabel = document.querySelectorAll('.form-label');
let input = document.querySelectorAll('.form-label > input');

for (let i = 0; i < 4; i++) {
    input[i].addEventListener('focus', function () {
        input[i].style.border = '1px solid #000';
        input[i].style.color = '#000';
    });
    input[i].addEventListener('focusout', function () {
        input[i].style.borderColor = 'grey';
        input[i].style.color = 'grey';
    });
}

