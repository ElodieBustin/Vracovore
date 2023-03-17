import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product({ userId, isAuthenticated }) {
    const { id } = useParams();
    const [productItem, setProductItem] = useState([]);
    const [isAdded, setIsAdded] = useState('');
    const [checkedFavorite, setCheckedFavorite] = useState(false);
  
    useEffect(() => {
      async function fetchData() {
        const productItemResponse = await fetch(`http://localhost:3001/data/product/${id}`);
        const productItem = await productItemResponse.json();
        setProductItem(productItem[0]);
      }
      fetchData();
  
      // Vérifie si l'élément est déjà ajouté aux favoris
      const checkFavorite = async (itemId, userId) => {
        try {
          const response = await fetch(
            "http://localhost:3001/data/checkFavorites", 
            {
              method: "POST",
              headers: { 
                "Content-Type": "application/json",
                "Accept":"application/json",
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify({ itemId, userId }),
            }
          );
          
          const parseRes = await response.json();
          console.log('je suis parseRes de checkFavorite', parseRes);
  
          // Met à jour l'état en conséquence
          setIsAdded(parseRes);
        } catch (err) {
          console.error(err.message);
        }
      };
  
      // Vérifie si l'élément est déjà ajouté aux favoris seulement si la vérification n'a pas encore été effectuée
      if (!checkedFavorite) {
        checkFavorite(id, userId);
        setCheckedFavorite(true);
      }
    }, [id, userId, checkedFavorite]);
  
    const addToFavorites = async (itemId, userId) => {
      const response = await fetch('http://localhost:3001/data/addFavorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Accept":"application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ itemId, userId })
      });
      const test = await response.json();
      console.log('je suis test', test);
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
        <button onClick={() => addToFavorites(id, userId)}>
          {isAdded ? "Added to favorite" : "Add to favorite"}
        </button>
      ) : null}
    </div>

    </article>

    );
};

export default Product;