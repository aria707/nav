'use strict';

const burgerButton = document.querySelector(
  '.burger-button'
);

const mobileNav = document.querySelector('.main-nav');

burgerButton.addEventListener('click', function () {
  mobileNav.classList.toggle('open-menu');
});

mobileNav.addEventListener('click', function (e) {
  const clickedEl = e.target;

  if (clickedEl.tagName === 'NAV')
    mobileNav.classList.remove('open-menu');
});
