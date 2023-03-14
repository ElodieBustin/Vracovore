import React, {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';

const Dashboard = ({setAuth}) => {

    const [first_name, setName] = useState("");

    const getProfile = async () => {
      try {
        const res = await fetch("http://localhost:3000/dashboard/", {
          method: "GET",
          headers: { jwt_token: localStorage.token }
        });
  
        const parseData = await res.json();
        setName(parseData.first_name);
      } catch (err) {
        console.error(err.message);
      }
    };
  
    const logout = async e => {
      e.preventDefault();
      try {
        localStorage.removeItem("token");
        setAuth(false);
        toast.success("Logout successfully");
      } catch (err) {
        console.error(err.message);
      }
    };

    useEffect(() => {
        getProfile();
      }, []);

    
      return (
      <>
      <Header />
      <div className='dashboard'>
        <h1 className='dashboard__title'>Bienvenue sur votre page {first_name}</h1>
        <div className='dashboard__contentFav'>
          Vos produits favoris sont :
        </div>
      <button className='dashboard__button' onClick={e => logout(e)} >
      <Link to='/' >Se déconnecter</Link>
      </button>
    </div>
    <Footer />
  </>
      );
    };
    export default Dashboard;