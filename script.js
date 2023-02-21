const btnHamburger = document.querySelector('#btnHamburger');
const navigation = document.querySelector('.navigation');
const menuBurger = document.querySelector('.navigation__burger--menu');

//Burger Menu
btnHamburger.addEventListener('click', function(){

  if(navigation.classList.contains('open')){ // Close Hamburger Menu
    navigation.classList.remove('open');
    menuBurger.classList.remove('entry');
    menuBurger.classList.add('exit');

  }
  else { // Open Hamburger Menu
    navigation.classList.add('open');
    menuBurger.classList.add('entry');
    menuBurger.classList.remove('exit');
    menuBurger.classList.remove('off');
  }  
});

//CAROUSEL

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;


//arrange slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
};

// when I click left, move slides to the left
prevButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;



  if(prevSlide){
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
  } else {
    const targetSlide = slides[slides.length -1];
    const prevDot = dots[dots.length -1];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, prevDot);
  }
});

// when I click right, move slides to the right
nextButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;

  if (nextSlide) {
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
  } else { 
    const targetSlide = slides[0];
    const nextDot = dots[0];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, nextDot);
  }
});

// when I click the nav indicators, move to that slide
dotsNav.addEventListener('click', e =>{
  //which indicator was clicked on ?
  const targetDot = e.target;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
});

