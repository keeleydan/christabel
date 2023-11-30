// script.js
/*document.addEventListener('DOMContentLoaded', function () {
    // Example JavaScript code for interaction
    alert('Welcome to My Website!');
});*/
function registerAlert(){
    alert("You have signed up successfully!");
}
function loginAlert(){
    alert("You have successfully logged in!")
}
var TrendingSlider = new Swiper(".trending-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});