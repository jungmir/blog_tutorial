(function () {

    var doc = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;

    var headerMain = document.querySelector('.header-main');

    var checkScroll = function () {
        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {
            //scrolled up
            direction = 2;
        } else if (curScroll < prevScroll) {
            //scrolled down
            direction = 1;
        }

        if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
        }

        prevScroll = curScroll;
    }

    var toggleHeader = function (direction, curScroll) {
        if (direction === 2 && curScroll > 52) {

            //replace 52 with the height of your header in px
            headerMain.style.boxShadow = '0 1px 10px rgba(0, 0, 0, 0.1)';
            headerMain.style.transition = 'all 0.2s ease';
            headerMain
                .classList
                .add('hide');
            prevDirection = direction;
        } else if (direction === 1) {
            headerMain
                .classList
                .remove('hide');
            prevDirection = direction;
        }
    };

    window.addEventListener('scroll', checkScroll);

})();

let loginBtn = document.querySelector('.login-btn');
let loginPopUp = document.querySelector('.login-popup')
let loginBody = document.querySelector('#body')
let exitBtn = document.querySelector('.fa-times-circle')
let body = document.body;

loginBtn.addEventListener('click', () => {
    loginPopUp.style.display = 'flex';
    loginBody.style.opacity = '.2';
    body.style.overflow = 'hidden';
})

exitBtn.addEventListener('click', () => {
    loginPopUp.style.display = 'none';
    loginBody.style.opacity = '1';
    body.style.overflow = 'visible';
})

// /* 12/28 */

let heart = document.querySelector('.fa-heart');
let share = document.querySelector('.fa-share-alt');

heart.addEventListener("click", (function() {
    if (this.state) {
      heart.style.color = "red";
    } else {
      heart.style.color = "rgb(134, 142, 150)";
    }
    this.state = !this.state;
  }).bind({ state: false }));

//   12 / 30

let hideIcon = document.querySelector('.hide-icons')
let twitter = document.querySelector('.fa-twitter')
let facebook = document.querySelector('.fa-facebook')
let clip = document.querySelector('.fa-paperclip')

share.addEventListener("click", (function() {
    if (this.state) {
        hideIcon.style.display = "block";
    } else {
        hideIcon.style.display = "none";
    }
    this.state = !this.state;
  }).bind({ state: false }));
