import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import ListProduct from './components/ListProduct';
import ListRecipes from './components/ListRecipes';
import Homepage from './components/Homepage';
import ConnectForm from './components/connectForm';
import Dashboard from './components/Dashboard';
import Product from './components/Product';

import './scss/reset.css';
import './scss/styles.css';

function App(){
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:3001/dashboard", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      setUserId(parseData.id);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    async function checkAuthenticated() {
      if (!localStorage.token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:3001/jwtAuth/verify", 
          {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              "Accept":"application/json",
              "Access-Control-Allow-Origin": "*",
              "jwt_token": localStorage.token 
            }
          }
        );
        
        const parseRes = await response.json();
        setIsAuthenticated(parseRes);
        getProfile();
      } catch (err) {
        console.error(err.message);
      }
    }
    
    checkAuthenticated();
  }, []);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };



  return (
    <React.StrictMode>
      <Router>
        <Header />
                <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<ListProduct />} />
                <Route path="/recettes" element={<ListRecipes />} />
                <Route path="/login" element={!isAuthenticated ? <ConnectForm setAuth={setAuth} /> : <Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard setAuth={setAuth} userId={userId} />} />
                <Route path="/product/:id" element={<Product isAuthenticated={isAuthenticated} />} />
                </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
