"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var app = new Vue({
    el: '#vue',
    data: {
      input_1: '+7',
      input_2: '',
      input_3: '',
      selected: 'OOO',
      input_4_1: '',
      input_4_2: '',
      input_5: ''
    },
    methods: {
      submit: function submit() {
        console.log(this.input_1, this.input_2, this.input_3); // e.preventDefault()
      }
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