function Hamburger(){
    var a = document.getElementById('Links');
    if(a.style.display==="block"){
        a.style.display = "none";
    } else{
        a.style.display = "block";
    }
}
var bttn = document.getElementById('toTop');
window.onscroll = function(){scrollFunc2()};
function scrollFunc2(){
    if(document.documentElement.scrollTop > 700){
        bttn.style.display = "none";
    } else{
        bttn.style.display = "block"
    }
}
bttn.addEventListener('click', ()=>{
    document.documentElement.scroll({top: 0, behavior: 'smooth'});
})
function myDate(){
    document.getElementById('date').innerHTML= new Date().getFullYear();
}

//Modal
document.addEventListener("DOMContentLoaded", function() {
  const modalOverlay = document.getElementById("modalOverlay");
  const modal = document.querySelector(".modal");
  const closeBtn = document.getElementById("closeBtn");

  // Open modal
  document.querySelector("img").addEventListener("click", function() {
    modalOverlay.style.display = "flex";
  });

  // Close modal
  closeBtn.addEventListener("click", function() {
    modalOverlay.style.display = "none";
  });

  // Close modal when clicking outside the content
  modalOverlay.addEventListener("click", function(event) {
    if (event.target === modalOverlay) {
      modalOverlay.style.display = "none";
    }
  });
});
