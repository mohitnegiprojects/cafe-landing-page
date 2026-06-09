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