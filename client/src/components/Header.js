import {Link} from 'react-router-dom';

function Header(){
    return (
        <header className="navigation">
        <div className="navigation__logo">
            <img src={require('./../assets/images/Vracovore.gif')} alt="" />
        </div>

        <a id="btnHamburger" href="/" className="navigation__toggle hide-for-desktop">
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