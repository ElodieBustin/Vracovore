import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';


import ListProduct from './components/ListProduct';
import ListRecipies from './components/ListRecipes';
import Homepage from './components/Homepage';
import ConnectForm from './components/connectForm';
import Dashboard from './components/Dashboard';

import './scss/reset.css';
import './scss/styles.css';


function App(){

    return (
        <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/"
                        element={<Homepage />}
                />
                {/* <Route path='/concept'
                        element={<Concept />}
                /> */}
                <Route path='/products'
                        element={<ListProduct />}
                />
                <Route path='/recettes'
                        element={<ListRecipies />}
                />
                <Route path='/login'
                        element = {<ConnectForm />}
                         />
                <Route path="/dashboard"
                element={<Dashboard />}  
                /> 
            </Routes>

        </Router>
        </React.StrictMode>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);