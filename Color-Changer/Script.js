const buttons = document.querySelectorAll('.container');
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click' , function(e){
        body.style.backgroundColor = e.target.id ;
    })
})
