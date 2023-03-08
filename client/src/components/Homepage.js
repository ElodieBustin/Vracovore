import Header from "./Header";
import Footer from "./Footer";

/* eslint-disable jsx-a11y/iframe-has-title */
function Homepage(){
    return (
        <>
        <Header />
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

    <Footer />
    </>
    );
};

export default Homepage;