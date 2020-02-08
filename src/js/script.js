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
                const {number, inn,organisationName, organisationType, 
                    jurAddress_1, jurAddress_2,email,password} = this.registration

                if(true) {
                    
                }

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
                
                
            }
        },
        methods: {
            submit() {
                this.combineRegistrationForm
                this.sendAjax()
            },
            switchPage(xxx) {
                this.currentPage = xxx
                // console.log(this.currentPage)
            },
            sendAjax(url) {
                const jsonData = JSON.stringify(this.registration.array)
                // console.log(jsonData) 
                axios
                    .post('./form.php', jsonData)
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error));
            }
        }
    }) 



window.addEventListener('scroll', ()=> {

});

window.addEventListener('click', e => {
    if(e.target) {
        
    } else {

    }
})

})