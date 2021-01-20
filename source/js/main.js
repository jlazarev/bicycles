'use strict';

(function () {

  // menu

  var header = document.querySelector('.page-header');
  var navToggle = document.querySelector('.page-header__menu-button');

  header.classList.remove('page-header--nojs');

  navToggle.addEventListener('click', function () {
    if (header.classList.contains('page-header--close-menu')) {
      header.classList.remove('page-header--close-menu');
      header.classList.add('page-header--open-menu');
    } else {
      header.classList.add('page-header--close-menu');
      header.classList.remove('page-header--open-menu');
    }
  });

  // scroll

  var links = document.querySelectorAll('.menu__link');
  var addSlowScroll = function (link) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      var id = link.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (var i = 0; i < links.length; i++) {
    addSlowScroll(links[i]);
  }

})();
