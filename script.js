const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const navigation = document.querySelector('.navigation');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
  console.log('click hamburger');

  if(navigation.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    navigation.classList.remove('open');    
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    
  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    navigation.classList.add('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });

  }  
});

console.log('coucou');