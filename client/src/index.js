import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import ListProduct from './components/ListProduct';
import ListRecipies from './components/ListRecipes';
import Homepage from './components/Homepage';
import ConnectForm from './components/connectForm';
import Dashboard from './components/Dashboard';

import './scss/reset.css';
import './scss/styles.css';

function App(){
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuthenticated() {
      try {
        const response = await fetch(
          "http://localhost:3001/verify", 
          {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              Accept:"application/json",
              "Access-control-Allow-origin": "*",
              jwt_token: localStorage.token 
            }
          }
        );
        
        const parseRes = await response.json();
        setIsAuthenticated(parseRes);
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
                <Route exact path="/" element={<Homepage />} />
                <Route path="/products" element={<ListProduct />} />
                <Route path="/recettes" element={<ListRecipies />} />
                <Route path="/login" element={!isAuthenticated ? <ConnectForm setAuth={setAuth} /> : <Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard setAuth={setAuth} />} />
                </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
