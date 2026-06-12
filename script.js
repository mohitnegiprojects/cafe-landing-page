// Top button arrow
window.addEventListener('scroll',function(){
    const topBtn = document.getElementById('topBtn');
    if(window.scrollY>300){
        topBtn.style.display = 'block';
    }else{
        topBtn.style.display = 'none';
    }
});
document.getElementById('topBtn').addEventListener('click',function(){
    window.scrollTo({top: 0, behavior:'smooth'});
});

//Toogle button
const themebtn = document.getElementById('theme-btn');
themebtn.addEventListener('click',function(){
    document.body.classList.toggle('night-mode');
    if(document.body.classList.contains('night-mode')){
        themebtn.textContent = "☀️Switch to Day Mode";
    }else{
        themebtn.textContent = "🌙Switch to Night Mode";
    }
});

//Form 
 const formbutton = document.getElementById('contactForm');
formbutton.addEventListener('submit',function(e){
    e.preventDefault();
    document.getElementById('formMsg').style.display = "block";
    this.reset();
});