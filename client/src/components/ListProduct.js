import Header from "./Header";
import Footer from "./Footer";

function ListProduct(){

    return (
    <>
        <Header />
    <section className="listContainer">

        <h1 className="listContainer__title">Tous nos produits</h1>

        <aside className="categoryContainer">
            <ul className="categoryContainer__list">
                <li className="categoryContainer__list--element">
                    Féculent
                </li>
                <li className="categoryContainer__list--element">
                    Légumes
                </li>
                <li className="categoryContainer__list--element">
                    Fruits
                </li>
            </ul>
        </aside>

        <div className="productsContainer">
            <a href="produit.html" className="productCard">
                <div className="productCard__name">Riz blanc</div>
                <div className="productCard__priceKilo">3€/kilo</div>
        
                <div className="productCard__imgContainer">
                    <img src={require("./../assets/images/rice_picture.jpg")} alt="" />
                </div>
        
                <div className="productCard__infos">
                    <span className="productCard__infos--quantity">500gr</span>
                    <span className="productCard__infos--price">1.5€</span>
                    <span className="productCard__infos--category">Féculent</span>
                </div>
            </a>
        
            <a href="produit.html" className="productCard">
                <div className="productCard__name">Riz blanc</div>
                <div className="productCard__priceKilo">3€/kilo</div>
        
                <div className="productCard__imgContainer">
                    <img src={require("./../assets/images/rice_picture.jpg")} alt="" />
                </div>
        
                <div className="productCard__infos">
                    <span className="productCard__infos--quantity">500gr</span>
                    <span className="productCard__infos--price">1.5€</span>
                    <span className="productCard__infos--category">Féculent</span>
                </div>
            </a>
        
            <a href="produit.html" className="productCard">
                <div className="productCard__name">Riz blanc</div>
                <div className="productCard__priceKilo">3€/kilo</div>
        
                <div className="productCard__imgContainer">
                    <img src={require("./../assets/images/rice_picture.jpg")} alt="" />
                </div>
        
                <div className="productCard__infos">
                    <span className="productCard__infos--quantity">500gr</span>
                    <span className="productCard__infos--price">1.5€</span>
                    <span className="productCard__infos--category">Féculent</span>
                </div>
            </a>
        </div>
    </section>
    <Footer />
</>
    );
};

export default ListProduct;