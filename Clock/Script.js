const Clock = document.querySelector(".clock");


setInterval(function(){
    const date = new Date();
    Clock.innerHTML = date.toLocaleString();
},1000)
