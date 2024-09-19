let dateEl=document.querySelectorAll("#news-card-date");
const notificationBtn=document.querySelector(".notification-btn")
let currentDate= new Date().toLocaleString();
const subscribeBtn=document.querySelector(".subscribe-btn")

setInterval(justFunc,1);

function justFunc() {
   dateEl.forEach(el => {
    el.innerHTML=currentDate
   });
}
subscribeBtn.addEventListener("click",(e)=>{
   window.location.assign("https://t.me/my_first_blog_IT")
   
})
notificationBtn.addEventListener("click",()=>{
   alert("Reklamalar yoqildi !.")
})


