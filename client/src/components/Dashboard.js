import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import FavoriteCard from './FavoriteCard';

const Dashboard = ({setAuth, userId, first_name}) => {
    const [favoriteItems, setFavoriteItems] = useState([]);

    useEffect(() => {
      if (userId) {
        const fetchFavoriteItems = async () => {
          try {
            const favoriteResponse = await fetch(`http://localhost:3001/data/getFavorites/${userId}`);
            const favoriteItems = await favoriteResponse.json();
            setFavoriteItems(favoriteItems);
          } catch (error) {
            console.error(error);
          }
        };
        fetchFavoriteItems();
      }
    }, [userId]);
  
    const handleLogout = async () => {
      if (window.confirm('Êtes-vous sûr(e) et certain(e) de vouloir vous déconnecter ? Ce n\'est pas un mauvais clic ? Pas une erreur ? 100% ?')) {
        try {
          localStorage.removeItem('token');
          setAuth(false);
        } catch (err) {
          console.error(err.message);
        }
      }
    };
    

      return (
      <>
      <div className='dashboard'>
        <h1 className='dashboard__title'>Bienvenue sur votre page {first_name}</h1>
        <div className='dashboard__contentFav'>
          Vos produits favoris sont :
          <div className='dashboard__favContainer'>
            {favoriteItems.map(favorite => 
              <FavoriteCard key={favorite.id} favorite={favorite}/>)}
          </div>
        </div>
      
      <Link to='/' >
        <button className='dashboard__button' onClick={e => handleLogout(e)} >
          Se déconnecter
        </button>
      </Link>
    </div>
  </>
      );
    };
    export default Dashboard;