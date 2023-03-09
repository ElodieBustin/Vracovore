import Header from "./Header";
import Footer from "./Footer";
import Login from './Login';
import Register from './Register';


const ConnectForm = ({setAuth}) => {
    return (
        <>
        <Header />
        <div className='connectContainer'>
            <Login  />
            <Register />
        </div>
        <Footer />
        </>
    )
}

export default ConnectForm;