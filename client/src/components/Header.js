import {Link} from 'react-router-dom';

function Header(){

    function handleClickBurger(){
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
    }
    return (
        <header className="navigation">
        <div className="navigation__logo">
            <img src={require('./../assets/images/Vracovore.gif')} alt="" />
        </div>

        <a 
        id="btnHamburger" 
        href="/" 
        className="navigation__toggle hide-for-desktop"
        onClick={handleClickBurger}>
            <span></span>
            <span></span>
            <span></span>
        </a>

        <nav className="navigation__burger--menu off hide-for-desktop">
            <Link to="/">Accueil</Link>
            <Link to="/concept">Concept</Link>
            <Link to="/products">Produits</Link>
            <Link to="/recettes">Recettes</Link>
            <Link to="/login">Connexion</Link>
        </nav>

        <nav className="navigation__links hide-for-mobile">
            <Link to="/">Accueil</Link>
            <Link to="/concept">Concept</Link>
            <Link to="/products">Produits</Link>
            <Link to="/recettes">Recettes</Link>
            <Link to="/login">Connexion</Link>
        </nav>
    </header>
    )
};

export default Header;