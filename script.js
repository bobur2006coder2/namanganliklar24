let dateEl=document.querySelectorAll("#news-card-date");
let currentDate= new Date().toLocaleString()

setInterval(justFunc,1);

function justFunc() {
   dateEl.forEach(el => {
    el.innerHTML=currentDate
   });
}


