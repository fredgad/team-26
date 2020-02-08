"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var app = new Vue({
    el: '#vue',
    data: {
      selected: 'ss',
      input_1: '',
      input_2: '',
      input_3: '',
      input_4_1: '',
      input_4_2: '',
      input_5: ''
    }
  });
  window.addEventListener('scroll', function () {//     if($(window).width() < 910) {
    //         let scrolled = window.pageYOffset || document.scrollTop
    //         if (scrolled > 150) {
    //         } else {
    //         }
    //    }
  });
  window.addEventListener('click', function (e) {
    if (e.target) {} else {}
  });
});