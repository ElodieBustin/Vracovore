const btnHamburger = document.querySelector('#btnHamburger');
const navigation = document.querySelector('.navigation');
const menuBurger = document.querySelector('.navigation__burger--menu');

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

console.log(menuBurger);