document.addEventListener('DOMContentLoaded', function() {


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
                array: {

                }
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
                staffnameData: [
                    {name: 'Идрисов Руслан Алексеевич', passport: '9024242341'},
                    {name: 'Шмидрисов Руслан Алексеевич', passport: '9024242341'},
                    {name: 'Барбарисов Руслан Алексеевич', passport: '9024242341'},
                ]
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
            auth() { 
                this.authorisation.arr = {
                    mail: this.authorisation.mail,
                    pass: this.authorisation.pass,
                }  
                let authentificationArr  = JSON.stringify(this.authorisation.arr)
                axios
                    .post('./form.php', authentificationArr)
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error));
            },
            switchPage(xxx) {
                this.currentPage = xxx
                // console.log(this.currentPage)
            },
            switchAccount(xxx) {
                this.account.accountPage = xxx
                console.log(this.account.accountPage)
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