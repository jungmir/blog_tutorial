let trending = document.querySelector('.trending');
let clock = document.querySelector('.new');

// trending.addEventListener('click', () => {
//     clock.style.opacity = '0.4';
//     trending.style.opacity = '1';
//     trending.style.borderBottom = '3px solid #000';
//     trending.style.paddingBottom = '3px';
//     clock.style.borderBottom = 'none';
// });

// clock.addEventListener('click', () => {
//     trending.style.opacity = '0.4';
//     clock.style.opacity = '1';
//     trending.style.borderBottom = 'none';
//     clock.style.borderBottom = '3px solid #000';
//     clock.style.paddingBottom = '3px';
//     trending.style.borderBottom = 'none';
// });


document.querySelector('.underline').style.left = document.querySelector('.trending').getBoundingClientRect().x + 'px';

for(const item of document.querySelectorAll('.trending')) {
    item.addEventListener('mousedown', e => {
        const rect = item.getBoundingClientRect();
        document.querySelector('.underline').style.left = rect.x + 'px';
    })
}
