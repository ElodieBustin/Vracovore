function Header(){
    return (
        <header className="navigation">
        <div className="navigation__logo">
            <img src={require('./assets/images/Vracovore.gif')} alt="" />
        </div>

        <a id="btnHamburger" href="index.html" className="navigation__toggle hide-for-desktop">
            <span></span>
            <span></span>
            <span></span>
        </a>

        <nav className="navigation__burger--menu off hide-for-desktop">
            <a href="index.html">Accueil</a>
            <a href="concept.html">Concept</a>
            <a href="listProduct.html">Produits</a>
            <a href="recettes.html">Recettes</a>
            <a href="index.html">Connexion</a>
        </nav>

        <nav className="navigation__links hide-for-mobile">
            <a href="index.html">Accueil</a>
            <a href="concept.html">Concept</a>
            <a href="listProduct.html">Produits</a>
            <a href="recettes.html">Recettes</a>
            <a href="index.html">Connexion</a>
        </nav>
    </header>
    )
};

export default Header;