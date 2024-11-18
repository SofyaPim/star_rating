const stars = document.querySelectorAll('.fa-star-o');
const selectedRatingValue =document.querySelector('.selected-rating-value');
let currentTotalSelectedStars = -1;
stars.forEach((starItem, index) => {
   starItem.dataset.rating = index + 1;
   starItem.addEventListener('mouseover', handlerMouseOver);
   starItem.addEventListener('click', handlerOnClick);
   starItem.addEventListener('mouseleave', handlerMouseLeave);
})

function handlerMouseOver(event) {
   const currentRatingValue = event.target.dataset.rating;
   if(!currentRatingValue) return;
   else handlerUpdateRatingState(currentRatingValue);

   
}
function handlerUpdateRatingState(value) {
   for (let i = 0; i < 5; i++) {
      if(i < value){
         stars[i].classList.replace('fa-star-o', 'fa-star');
      }else {
         stars[i].classList.replace('fa-star', 'fa-star-o');

      }
      
   }
}
function handlerOnClick(event) {
   const currentRatingValue = event.target.dataset.rating;
   currentTotalSelectedStars = currentRatingValue;
   handlerUpdateRatingState(currentTotalSelectedStars);
   selectedRatingValue.innerText = currentTotalSelectedStars;
   // console.log('===============================================');
  
   // console.log('===============================================');
   
}
function handlerMouseLeave() {
   handlerUpdateRatingState(currentTotalSelectedStars);
  
   
   // console.log('===============================================');
  
   // console.log('===============================================');
   
}