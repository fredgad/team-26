"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var app = new Vue({
    el: '#vue',
    data: {}
  });
  window.addEventListener('scroll', function () {
    if ($(window).width() < 910) {
      var scrolled = window.pageYOffset || document.scrollTop;

      if (scrolled > 150) {} else {}
    }
  });
  window.addEventListener('click', function (e) {
    if ($(e.target).hasClass('nav') || $(e.target).parents().hasClass('nav')) {} else {}
  });
});