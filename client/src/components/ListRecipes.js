import Header from "./Header";
import Footer from "./Footer";

function ListRecipies(){
    return (
        <>
        <Header />
        <div className="listRecipies">
        <div className="recipiesCard">
            <div className="recipiesCard__imgContainer">
            <img src={require("./../assets/images/savon.jpg")} alt="" />
            </div>
    
            <p className="recipiesCard__title">
                <span>Liquide vaisselle</span> 
            </p>
        </div>
    
        <div className="recipiesCard">
            <div className="recipiesCard__imgContainer">
            <img src={require("./../assets/images/savon.jpg")} alt="" />
            </div>

            <p className="recipiesCard__title">
                <span>Liquide vaisselle</span> 
            </p>
        </div>

        <div className="recipiesCard">
            <div className="recipiesCard__imgContainer">
            <img src={require("./../assets/images/savon.jpg")} alt="" />
            </div>

            <p className="recipiesCard__title">
                <span>Liquide vaisselle</span> 
            </p>
        </div>

    </div>
    <Footer />
    </>
    );
};

export default ListRecipies;