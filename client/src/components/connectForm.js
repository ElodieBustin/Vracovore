import Header from "./Header";
import Footer from "./Footer";
import Login from './Login';
import SignUp from './SignUp';


const ConnectForm = () => {
    return (
        <>
        <Header />
        <div className='connectContainer'>
            <Login />
            <SignUp />
        </div>
        <Footer />
        </>
    )
}

export default ConnectForm;