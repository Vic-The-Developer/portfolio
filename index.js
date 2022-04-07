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