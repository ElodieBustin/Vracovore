import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Product({isAuthenticated}){
  //userId peut renvoyer un empty string en passant en props, checker pourquoi
  //obligée d'avoir getProfile sur toutes les pages qui nécessite l'envoi du userId T_T
    const { id } = useParams();
    const [productItem, setProductItem] = useState([]);
    const [userId, setUserId] = useState('');
    const [isAdded, setIsAdded] = useState(false);

    const getProfile = async () => {
      try {
        const res = await fetch("http://localhost:3001/dashboard/", {
          method: "GET",
          headers: { jwt_token: localStorage.token }
        });
  
        const parseData = await res.json();
        console.log(parseData.id);
        setUserId(parseData.id);
      } catch (err) {
        console.error(err.message);
      }
    };

    useEffect(() => {
        async function fetchData() {
            const productItemResponse = await fetch(`http://localhost:3001/data/product/${id}`);
            const productItem = await productItemResponse.json();
            setProductItem(productItem[0]);
        };
        const checkFavorite = async (item_id, user_id) => {
          console.log('je suis userId', user_id)
          const response = await fetch('http://localhost:3001/data/checkFavorites', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ item_id, user_id })
          });
          const checkFavResponse = await response.json();
          console.log(checkFavResponse);
        }
        fetchData();
        checkFavorite(id, userId);
    }, [id, userId]);

    const addToFavorites = async (item_id, user_id) => {
        const response = await fetch('http://localhost:3001/data/addFavorites', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ item_id, user_id })
        });
        await response.json();
      };



      const deleteFavorite = async () =>{
        console.log('je suis delete');
      }

      useEffect(() => {
        getProfile();
      }, []);

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
        isAdded ? <button onClick={() => deleteFavorite(id, userId)}>Delete favorite</button> : <button onClick={() => addToFavorites(id, userId)}>Add to favorite</button>
      ) : null}
    </div>

    </article>

    );
};

export default Product;