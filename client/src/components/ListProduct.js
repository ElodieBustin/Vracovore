import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";

function ListProduct(){

    const [items, setItems] = useState([]);

    const getAllItems = async () =>{
        try {
            const response = await fetch(
                'http://localhost:3001/listItems',
              {
                method: "GET",
                headers:{
                  "Content-Type": "application/json",
                  Accept:"application/json",
                  "Access-control-Allow-origin": "*"
                }
              }
            );
            const parseRes = await response.json();
            setItems(parseRes);
            console.log(parseRes);
          } catch (err) {
            console.error(err.message);
          }
        };
    
    useEffect(() => {
        getAllItems()
    }, []);

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
            { items.map(item => 
                <a key={item.id} href="produit.html" className="productCard">
                <div className="productCard__name">{item.name}</div>
                <div className="productCard__priceKilo">{item.price}/kilo</div>
        
                <div className="productCard__imgContainer">
                    <img src={item.image} alt="" />
                </div>
        
                <div className="productCard__infos">
                    <span className="productCard__infos--quantity">500gr</span>
                    <span className="productCard__infos--price">1.5€</span>
                    <span className="productCard__infos--category">{item.category}</span>
                </div>
            </a>
            )
            }
        </div>
    </section>
    <Footer />
</>
    );
};

export default ListProduct;