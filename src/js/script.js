document.addEventListener('DOMContentLoaded', function() {


    var app = new Vue({
        el: '#vue',  
        data: {
        }
    }) 



window.addEventListener('scroll', ()=> {
    if($(window).width() < 910) {
        let scrolled = window.pageYOffset || document.scrollTop

        if (scrolled > 150) {
            
        } else {
           
        }
   }
});

window.addEventListener('click', e => {
    if($(e.target).hasClass('nav') || $(e.target).parents().hasClass('nav')) {
        
    } else {

    }
})

})