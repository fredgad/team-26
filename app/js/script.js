"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var app = new Vue({
    el: '#wrapper',
    data: {
      currentPage: 'startPage',
      registration: {
        number: '+7',
        inn: '',
        organisationName: '',
        organisationType: 'OOO',
        jurAddress_1: '',
        jurAddress_2: '',
        email: '',
        password: '',
        repeatPassword: '',
        array: {}
      },
      authorisation: {
        mail: '',
        pass: ''
      },
      account: {
        currentAccount: 'standart'
      }
    },
    computed: {
      combineRegistrationForm: function combineRegistrationForm() {
        var _this$registration = this.registration,
            number = _this$registration.number,
            inn = _this$registration.inn,
            organisationName = _this$registration.organisationName,
            organisationType = _this$registration.organisationType,
            jurAddress_1 = _this$registration.jurAddress_1,
            jurAddress_2 = _this$registration.jurAddress_2,
            email = _this$registration.email,
            password = _this$registration.password;

        if (true) {}

        this.registration.array = {
          number: number,
          inn: inn,
          organisationType: organisationName,
          organisationName: organisationType,
          jurAddress_1: jurAddress_1,
          jurAddress_2: jurAddress_2,
          mail: email,
          password: password
        };
      }
    },
    methods: {
      submit: function submit() {
        this.combineRegistrationForm;
        this.sendAjax();
      },
      switchPage: function switchPage(xxx) {
        this.currentPage = xxx; // console.log(this.currentPage)
      },
      sendAjax: function sendAjax(url) {
        var jsonData = JSON.stringify(this.registration.array); // console.log(jsonData) 

        axios.post('./form.php', {
          body: jsonData
        }).then(function (response) {
          return console.log(response.data);
        })["catch"](function (error) {
          return console.log(error);
        });
      }
    }
  });
  window.addEventListener('scroll', function () {});
  window.addEventListener('click', function (e) {
    if (e.target) {} else {}
  });
});