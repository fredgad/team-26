"use strict";document.addEventListener("DOMContentLoaded",function(){new Vue({el:"#wrapper",data:{registration_1:"+7",registration_2:"",registration_3:"",selected:"OOO",registration_4_1:"",registration_4_2:"",registration_5:"",registration_6:"",registration_7:""},computed:{combineRegistrationForm:function(){var t={number:this.registration_1,inn:this.registration_2,organisationType:this.registration_3,organisationName:this.selected,jurAddress_1:this.registration_4_1,jurAddress_2:this.registration_4_2,mail:this.registration_5,password:this.registration_6};console.log(t)}},methods:{submit:function(){this.combineRegistrationForm}}});window.addEventListener("scroll",function(){}),window.addEventListener("click",function(t){t.target})});