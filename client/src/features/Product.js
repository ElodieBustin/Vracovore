function Product(){
    return (
        <article className="product">
        <div className="product__imgContainer">
            <img src="/assets/images/rice_picture.jpg" alt="" />
        </div>

        <div className="product__infos">
            <h1 className="product__infos--name">Riz blanc</h1>
            <span className="product__infos--price">1.5€</span>
            <div className="product__infos--subContainer">
                <span className="product__infos--quantity">500gr</span>
                <span className="product__infos--priceKilo">3€/kilo</span>
            </div>
            <span className="product__infos--category">Féculent</span>
            
        
        <div className="product__infos__description">
            <h2>Description du produit : </h2>
            <p className="product__infos__description--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
        </div>
    </div>

    </article>

    );
};

export default Product;