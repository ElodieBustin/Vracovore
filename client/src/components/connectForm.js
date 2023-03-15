import Login from './Login';
import Register from './Register';


const ConnectForm = ({setAuth}) => {

    return (
        <>
        <div className='connectContainer'>
            <Login  setAuth={setAuth}/>
            <Register setAuth={setAuth}/>
        </div>
        </>
    )
}

export default ConnectForm;