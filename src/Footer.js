function Footer(){
    return(
        <footer className="footer">
    <div className="footer__blockRubrique">
        <div className="footer__blockRubrique--rubrique">
            <p>Rubriques</p>
            <a href="index.html">Concept</a>
            <a href="index.html">Produits</a>
            <a href="index.html">Recettes</a>
            <a href="index.html">Notre recette préférée !</a>
        </div>
        <div className="footer__blockRubrique--infos">
            <p>A propos</p>
            <a href="index.html">Notre équipe</a>
            <a href="index.html">Protection des données</a>
            <a href="index.html">Règlementation</a>
        </div>
    </div>

    <div className="footer__blockContact">
        <div className="footer__blockContact--newsletter">
            Cliquez <a href="index.html">ici</a>  pour vous inscrire à notre newsletter !
        </div>
        <div className="footer__blockContact--contact">
            Une question ? Une remarque ? Un avis ? Un mot gentil ?
            C'est par <a href="index.html">ici</a> !
        </div>
    </div>

    <div className="footer__socialMedia">
        <div className="footer__socialMedia--icon">
            <i className="fa-brands fa-facebook"></i>
        </div>
        <div className="footer__socialMedia--icon">
            <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="footer__socialMedia--icon">
            <i className="fa-brands fa-twitter"></i>
        </div>
    </div>
</footer>
    );
};

export default Footer;