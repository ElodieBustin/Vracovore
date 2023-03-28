import { useEffect } from "react";

/* eslint-disable jsx-a11y/iframe-has-title */
function Homepage(){
    
useEffect(()=>{
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

})
    return (
        <>
        <main className="page">

        <div className="first-block">
            <div className="first-block__introText">
                <h1>Vracovore</h1>
                <h2>Magasin vrac</h2>
            </div>
        </div>
    
        <div className="carousel">
            <button className="carousel__button carousel__button--left">
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="carousel__track-container">
                <ul className="carousel__track">
                    <li className="carousel__slide current-slide">
                        <img className="carousel__images" src={require("./../assets/images/vracovore_carousel1.png")} alt="" />
                    </li>
                    <li className="carousel__slide">
                        <img className="carousel__images" src={require("./../assets/images/vracovore_carousel2.png")} alt="" />
                    </li>
                    <li className="carousel__slide">
                        <img className="carousel__images" src={require("./../assets/images/vracovore_carousel3.png")} alt="" />
                    </li>
                </ul>
            </div>
            <button className="carousel__button carousel__button--right">
                <i className="fa-solid fa-chevron-right"></i>
            </button>

            <div className="carousel__nav">
                <button className="carousel__indicator current-slide"></button>
                <button className="carousel__indicator"></button>
                <button className="carousel__indicator"></button>
            </div>
        </div>
    
        <div className="magPictures">
            <img src={require('./../assets/images/photos_mag.png')} alt="" />
        </div>

        <div className="info">
            <p className="info__where">Où nous trouver ?</p>
            <div className="info__imgMap">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10511.329132853072!2d2.1361489997443153!3d48.804179524454284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67d94d7b14c75%3A0x538fcc15f59ce8f!2sCh%C3%A2teau%20de%20Versailles!5e0!3m2!1sfr!2sfr!4v1677058273123!5m2!1sfr!2sfr" 
                width="300" height="400" style={{border:0}} 
                allowFullScreen="" loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="info__open">
                <p>Nos horaires :</p>
                <span className="info__open--day">Lundi - samedi : 10h - 18h30</span>
                
            </div>
        </div>

    </main>
    </>
    );
};

export default Homepage;