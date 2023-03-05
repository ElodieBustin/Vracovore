import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Footer from './Footer';
import Homepage from './components/Homepage';

import SignUp from './components/SignUp';

import './scss/reset.css';
import './scss/styles.css';

function App(){
    // const [data, setData] = React.useState(null);

    // React.useEffect(() => {
    //   fetch("/api")
    //     .then((res) => res.json())
    //     .then((data) => setData(data.message));
    // }, []);
    return (
        <>
        <Header />
        <SignUp />
        {/* <p>{!data ? "Loading..." : data}</p> */}
        <Homepage />
        <Footer />
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);