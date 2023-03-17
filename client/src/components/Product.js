import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Product({userId, isAuthenticated}){
    const { id } = useParams();
    const [productItem, setProductItem] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const productItemResponse = await fetch(`http://localhost:3001/data/product/${id}`);
            const productItem = await productItemResponse.json();
            setProductItem(productItem[0]);
        }
        fetchData();
    }, [id]);

    const addToFavorites = async (itemId, userId) => {
        const response = await fetch('http://localhost:3001/data/addFavorites', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ itemId, userId })
        });
        await response.json();
      };
    
    return (
        <article className="product">
        <div className="product__imgContainer">
            <img src={productItem.image} alt="" />
        </div>

        <div className="product__infos">
            <h1 className="product__infos--name">{productItem.name}</h1>
            <span className="product__infos--price">1.5€</span>
            <div className="product__infos--subContainer">
                <span className="product__infos--quantity">500gr</span>
                <span className="product__infos--priceKilo">{productItem.priceKilo}/kilo</span>
            </div>
            <span className="product__infos--category">{productItem.category}</span>
            
        
        <div className="product__infos__description">
            <h2>Description du produit : </h2>
            <p className="product__infos__description--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
        </div>

        {isAuthenticated ? (
            <button onClick={()=>addToFavorites(id, userId)}>Add to favorite</button>
        ) : null}
    </div>

    </article>

    );
};

export default Product;