"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var app = new Vue({
    el: '#wrapper',
    data: {
      registration_1: '+7',
      registration_2: '',
      registration_3: '',
      selected: 'OOO',
      registration_4_1: '',
      registration_4_2: '',
      registration_5: '',
      registration_6: '',
      registration_7: ''
    },
    computed: {
      combineRegistrationForm: function combineRegistrationForm() {
        var array = {
          number: this.registration_1,
          inn: this.registration_2,
          organisationType: this.registration_3,
          organisationName: this.selected,
          jurAddress_1: this.registration_4_1,
          jurAddress_2: this.registration_4_2,
          mail: this.registration_5,
          password: this.registration_6
        };
        console.log(array);
      }
    },
    methods: {
      submit: function submit() {
        this.combineRegistrationForm;
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