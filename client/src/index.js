import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Footer from './Footer';
import Homepage from './features/Homepage';

import './scss/reset.css';
import './scss/styles.css';

function App(){
    return (
        <>
        <Header />
        <Homepage />
        <Footer />
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);