import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Footer from './Footer';
import Homepage from './components/Homepage';

import SignUp from './components/SignUp';

import './scss/reset.css';
import './scss/styles.css';

function App(){
    return (
        <>
        <Header />
        <SignUp />
        <Homepage />
        <Footer />
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);