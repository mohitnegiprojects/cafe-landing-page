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

// cart working
let cart = [];
const cartCount = document.getElementById('cartCount');

document.querySelectorAll('.add-to-cart').forEach(function(button){
    button.addEventListener('click',function(){
        const name = this.getAttribute('data-name');
        const price = this.getAttribute('data-price');

        cart.push({name:name,price:price});
        cartCount.textContent = cart.length;

        // for visual feedback on cart button
        this.textContent = 'Added✅';
        this.style.backgroundColor = '#28a745';

        const btn = this;
        setTimeout(function(){
            btn.textContent = 'Add to Cart';
            btn.style.backgroundColor = '#e8b86d';
        },2000);
    });
});

//Menu Search Button
document.getElementById('menuSearch').addEventListener('input',function(){
    const searchTerm = this.value.toLowerCase().trim();
    document.querySelectorAll('.menu-item').forEach(function(item){
        const heading = item.querySelector('h3') || item.querySelector('h4') || item.querySelector('p');
        if(!heading) return;
        const name = heading.textContent.toLowerCase();
        if(searchTerm === '' || name.includes(searchTerm)){
            item.style.display = 'block'
        }else{
            item.style.display = 'none';
    }
  });
});

//Modal OverView
window.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('quickview-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const menuCardsList = document.querySelectorAll('.menu-item');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');

    // Make sure all elements exist before adding logic
    if (modal && menuCardsList.length > 0) {
        menuCardsList.forEach(card => {
            // Change cursor to pointer so users know it's clickable
            card.style.cursor = 'pointer';

            card.addEventListener('click', (e) => {
                // Finding the h3 heading inside the clicked card safely
                const heading = card.querySelector('h3');
                if (heading) {
                    const drinkName = heading.textContent;
                    
                    // Update the text dynamically inside the pop-up box
                    modalTitle.textContent = drinkName;
                    modalDesc.textContent = `Our premium Coffee  is handcrafted fresh by our baristas using custom roasted beans and premium ingredients.`;
                    
                    // Display the modal block overlay
                    modal.style.display = 'flex';
                }
            });
        });
    }

    // Close modal when clicking the 'X'
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Close modal if user clicks anywhere outside the actual box
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
//Tagline for all items are same, function will be required for each. 