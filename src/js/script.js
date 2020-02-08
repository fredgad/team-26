document.addEventListener('DOMContentLoaded', function() {


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
                array: {

                }
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
            combineRegistrationForm() {
                let {number, inn,organisationName, organisationType, 
                    jurAddress_1, jurAddress_2,email,password} = this.registration

                // if(true) {
                    
                // }

                this.registration.array = {
                    number: number,
                    inn: inn,
                    organisationType: organisationName,
                    organisationName: organisationType,   
                    jurAddress_1: jurAddress_1,
                    jurAddress_2: jurAddress_2,
                    mail: email,
                    password: password, 
                }
                console.log(this.registration.array)
            }
        },
        methods: {
            submit() {
                this.combineRegistrationForm
            },
            switchPage(xxx) {
                this.currentPage = xxx
                console.log(this.currentPage)
            }
        }
    }) 



window.addEventListener('scroll', ()=> {
//     if($(window).width() < 910) {
//         let scrolled = window.pageYOffset || document.scrollTop

//         if (scrolled > 150) {
            
//         } else {
           
//         }
//    }
});

window.addEventListener('click', e => {
    if(e.target) {
        
    } else {

    }
})

})