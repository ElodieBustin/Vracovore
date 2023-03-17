import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Dashboard = ({setAuth}) => {

    const [first_name, setName] = useState("");

    const getProfile = async () => {
      try {
        const res = await fetch("http://localhost:3001/dashboard/", {
          method: "GET",
          headers: { jwt_token: localStorage.token }
        });
  
        const parseData = await res.json();
        setName(parseData.first_name);
      } catch (err) {
        console.error(err.message);
      }
    };
  
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

    useEffect(() => {
        getProfile();
      }, [])
    
      return (
      <>
      <div className='dashboard'>
        <h1 className='dashboard__title'>Bienvenue sur votre page {first_name}</h1>
        <div className='dashboard__contentFav'>
          Vos produits favoris sont :
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