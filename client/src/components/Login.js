import {useState} from 'react';

const Login = ({setAuth}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(email, password);
    console.log(setAuth)
    if(email ==='' || password ===''){
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
    try {
      const body = { email, password };
      const response = await fetch('http://localhost:3001/login',{
      method: "POST",
      crossDomain:true,
      headers:{
        "Content-Type": "application/json",
        Accept:"application/json",
        "Access-control-Allow-origin": "*"
      },
      body:JSON.stringify(body),
    });

    const parseRes = await response.json();
    console.log('parseRes :', parseRes.token);

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        console.log("Logged in Successfully");
      } else {
        setAuth(false);
        console.log('je suis dans le else', parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
    
  const handleEmail = e => {
    setEmail(e.target.value);
    setSubmitted(false);
  }

  const handlePassword = e => {
    setPassword(e.target.value);
    setSubmitted(false);
  }

  const successMessage = () => {
    return (
      <div className='success'
      style={{display: submitted ? '' : 'none'
    }}>
      <h1>User logged</h1>
    </div>
    );
  };

  const errorMessage = () =>{
    return(
      <div className='error'
      style={{display: error ? '' : 'none'}}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

    return (
      <form className='connectContainer__form' onSubmit={handleSubmit}>
                      <div className='messages'>
        {errorMessage()}
        {successMessage()}
      </div>
        <h3>Sign In</h3>
        <div className='connectContainer__label'>
          <div className='connectContainer__label--email label'>
            <label className='labelInput'>Email address</label>
            <input
              type="email"
              className='input'
              placeholder="Enter email"
              onChange={handleEmail}
            />
          </div>
        
          <div className='connectContainer__label--password label'>
            <label className='labelInput'>Password</label>
            <input
              type="password"
              className='input'
              placeholder="Enter password"
              onChange={handlePassword}
            />
          </div>
        </div>
        <div className='connectContainer__container'>
          <div className='connectContainer__container--label--email'>
            <input type="checkbox"/>
            <label>
              Remember me
            </label>
          </div>
        </div>

        <div className='connectContainer__submit'>
          <button type="submit">
            Submit
          </button>
        </div>
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
      </form>
    )
  }

  export default Login;