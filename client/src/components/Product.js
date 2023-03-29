import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Product({isAuthenticated, userId}){
    const { id } = useParams();
    const [productItem, setProductItem] = useState([]);
    const [isAdded, setIsAdded] = useState(false);


    useEffect(() => {
        async function fetchData() {
          const productItemResponse = await fetch(`http://localhost:3001/data/product/${id}`);
          const productItem = await productItemResponse.json();
          setProductItem(productItem[0]);
      }
      fetchData();
      if(userId){
      checkFavorite(id, userId);
      }
    }, [id, userId]);

    const checkFavorite = async (item_id, user_id) => {
      const response = await fetch('http://localhost:3001/data/checkFavorites', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept":"application/json",
          "Access-control-Allow-origin": "*"
        },
        body: JSON.stringify({ item_id, user_id })
      });
      const checkFavResponse = await response.json();
      setIsAdded(checkFavResponse);
    }
    

    const addToFavorites = async (item_id, user_id) => {
      item_id = parseInt(item_id);
        const response = await fetch('http://localhost:3001/data/addFavorites', {
          method: 'POST',
          headers:{
            "Content-Type": "application/json",
            "Accept":"application/json",
            "Access-control-Allow-origin": "*"
          },
          body: JSON.stringify({ item_id, user_id })
        });
        const checkFavRes = await response.json();
        setIsAdded(checkFavRes);
        toast('Ce produit a bien été ajouté à vos favoris !')
      };

      const deleteFavorite = async (item_id, user_id) => {
        item_id = parseInt(item_id);
        const response = await fetch('http://localhost:3001/data/deleteFavorite',{
          method: 'DELETE',
          headers:{
            "Content-Type": "application/json",
            "Accept":"application/json",
            "Access-control-Allow-origin": "*"
          },
          body: JSON.stringify({ item_id, user_id })
        })
        setIsAdded(false);
        toast("Ce produit a bien été retiré de vos favoris");
      }
    
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
        isAdded ? 
          <button 
          className="button delete" 
          onClick={() => deleteFavorite(id, userId)}> Supprimer de la liste des favoris 
          <i className="fa-solid fa-heart-crack"></i>
          </button> : 
          <button 
          className="button add" 
          onClick={() => addToFavorites(id, userId)}>Ajouter à la liste des favoris 
          <i className="fa-solid fa-heart"></i>
          </button>
      ) : null}
    </div>
    <ToastContainer />
    </article>

    );
};

export default Product;