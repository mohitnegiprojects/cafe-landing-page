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

//Check whether the cafe is open or closed
function showCafeStatus(){
    const el = document.getElementById('cafe-status');
    if(el){
        const currentHour = new Date().getHours();
        if(currentHour >=8 && currentHour<20){
            el.innerHTML = "🟢Open Now";
            el.style.color = "#2ec4b6";
        }else{
            el.innerHTML = "🔴Closed Now";
            el.style.color = "#e71d36";
        }
    }
} 
// calling the function
showCafeStatus();

//Auto rotating review 
const reviews = [
    {text: '“The product quality is consistently outstanding, exceeding my expectations every time.”',author: "-Andy"},
    {text: '“I was completely impressed with their professionalism and customer service.”',author: "-Markus"},
    {text: '“Their customer service is second to none.”',author: "-Chris"}
];

let currentReviewIndex = 0;
function rotateReviews(){
    const textEl = document.getElementById('review-text');
    const authorEl = document.getElementById('review-author');
    
    if(textEl && authorEl){
        //move to next review by moving to index 1
        currentReviewIndex = (currentReviewIndex + 1)%reviews.length;
        // Updation of HTML text properly 
        textEl.textContent = reviews[currentReviewIndex].text;
        authorEl.textContent = reviews[currentReviewIndex].author;
    }
}
// Now, We call our function every 4000 ms by using setInterval
setInterval(rotateReviews,4000);
