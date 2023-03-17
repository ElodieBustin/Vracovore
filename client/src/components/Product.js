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

    const addToFavorites = async (item_id, user_id) => {
      console.log('id dans add', item_id);
      console.log('userId dans add', user_id);
        const response = await fetch('http://localhost:3001/data/addFavorites', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ item_id, user_id })
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
          <span className="product__infos--category">{productItem.category}</span>
          <span className="product__infos--priceKilo">{productItem.priceKilo}/kilo</span>

          <div className="product__infos__subContainer">
              <div className="product__infos__subContainer--quantity">Poids moyen acheté <span className="italic">{productItem.weight}</span></div>
              <div className="product__infos__subContainer--price">Ce qui revient à <span className="italic">{productItem.unityPrice}</span></div>
          </div>


          
      
      <div className="product__infos__description">
          <h2>Description du produit : </h2>
          <p className="product__infos__description--text">{productItem.description}</p> 
      </div>

        {isAuthenticated ? (
            <button onClick={()=>addToFavorites(id, userId)}>Add to favorite</button>
        ) : null}
    </div>

    </article>

    );
};

export default Product;