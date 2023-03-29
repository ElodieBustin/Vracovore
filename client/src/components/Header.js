import { useState } from 'react';
import {Link} from 'react-router-dom';

function Header(){
    const [isActive, setIsActive] = useState(false);

    return (
        <header className="navigation">
            <div className="navigation__logo">
                <Link to="/">
                <img className='navigation__logo--img' src={require('./../assets/images/Vracovore.gif')} alt="" />
                </Link>
            </div>

            <a
            id="btnHamburger" 
            href="/" 
            className="navigation__toggle hide-for-desktop"
            onClick={()=>setIsActive(true)}>
                <span></span>
                <span></span>
                <span></span>
            </a>
            
            <nav className={`navigation__burger--menu ${!isActive ? 'off' : ''} hide-for-desktop`}>
                <Link to="/">Accueil</Link>
                <Link to="/concept">Concept</Link>
                <Link to="/products">Produits</Link>
                <Link to="/recettes">Recettes</Link>
                <Link to="/login">Mon profil</Link>
            </nav>

            <nav className="navigation__links hide-for-mobile">
                <Link to="/">Accueil</Link>
                <Link to="/concept">Concept</Link>
                <Link to="/products">Produits</Link>
                <Link to="/recettes">Recettes</Link>
                <Link to="/login">Mon profil</Link>
            </nav>
        </header>
    )
};

export default Header;