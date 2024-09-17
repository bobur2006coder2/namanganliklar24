let dateEl=document.querySelectorAll("#news-card-date");
const notificationBtn=document.querySelector(".notification-btn")
let currentDate= new Date().toLocaleString()

setInterval(justFunc,1);

function justFunc() {
   dateEl.forEach(el => {
    el.innerHTML=currentDate
   });
}

notificationBtn.addEventListener("click",()=>{
   alert("Reklamalar yoqildi !.")
})


