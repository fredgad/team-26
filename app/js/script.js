"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var app = new Vue({
    el: '#wrapper',
    data: {
      currentPage: 'account',
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
        pass: '',
        arr: {}
      },
      account: {
        accountPage: 'organisationData',
        companyData: {
          companyType: '',
          companyName: '',
          inn: '',
          number: '',
          mail: '',
          staff: ''
        },
        staffnameData: [{
          name: 'Идрисов Руслан Алексеевич',
          passport: '9024242341'
        }, {
          name: 'Шмидрисов Руслан Алексеевич',
          passport: '9024242341'
        }, {
          name: 'Барбарисов Руслан Алексеевич',
          passport: '9024242341'
        }]
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
      auth: function auth() {
        this.authorisation.arr = {
          mail: this.authorisation.mail,
          pass: this.authorisation.pass
        };
        var authentificationArr = JSON.stringify(this.authorisation.arr);
        axios.post('./form.php', authentificationArr).then(function (response) {
          // if(response.data[1]['success']) {
          //     // console.log('1', response.data[0]['success'])
          //     // console.log('2', response.data[1]['success'])
          //     // console.log('3', response.data['success'])
          //     // console.log('4', response.data['message']) 
          //     this.currentPage = 'account'
          // }
          console.log(response);
        })["catch"](function (error) {
          return console.log(error);
        });
      },
      switchPage: function switchPage(xxx) {
        this.currentPage = xxx; // console.log(this.currentPage)
      },
      switchAccount: function switchAccount(xxx) {
        this.account.accountPage = xxx;
        console.log(this.account.accountPage);
      },
      sendAjax: function sendAjax(url) {
        var jsonData = JSON.stringify(this.registration.array); // console.log(jsonData) 

        axios.post('./form.php', jsonData).then(function (response) {
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