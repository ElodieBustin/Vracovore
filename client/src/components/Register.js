import {useState} from 'react';
import axios from 'axios';

const Register = () => {
  const [last_name, setLastName] = useState('');
  const [first_name, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleFirstName = e => {
    setFirstName(e.target.value);
    setSubmitted(false);
  }

  const handleLasttName = e => {
    setLastName(e.target.value);
    setSubmitted(false);
  }

  const handleEmail = e => {
    setEmail(e.target.value);
    setSubmitted(false);
  }

  const handlePassword = e => {
    setPassword(e.target.value);
    setSubmitted(false);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(last_name, first_name, email, password);
    if(last_name ==='' || first_name ==='' || email ==='' || password ===''){
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }

       await fetch('http://localhost:3001/register',{
      method: "POST",
      crossDomain:true,
      headers:{
        "Content-Type": "application/json",
        Accept:"application/json",
        "Access-control-Allow-origin": "*"
      },
      body:JSON.stringify({
        last_name,
        first_name,
        email,
        password
      }),
    })
    .then((res)=> res.json())
    .then((data)=>{
      console.log(data, "userRegister");
    })
  };

  const successMessage = () => {
    return (
      <div className='success'
      style={{display: submitted ? '' : 'none'
    }}>
      <h1>User {last_name} {first_name} registered</h1>
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


    


  // function handleSubmit(event){

  //   fetch("http://localhost:3001/register",{
  //     method: "POST",
  //     crossDomain:true,
  //     headers:{
  //       "Content-Type": "application/json",
  //       Accept:"application/json",
  //       "Access-control-Allow-origin": "*"
  //     },
  //     body:JSON.stringify({
  //       last_name,
  //       first_name,
  //       email,
  //       password
  //     }),
  //   })
  //   .then((res)=> res.json())
  //   .then((data)=>{
  //     console.log(data, "userRegister");
  //   })
  // }

    return (

      <form className='connectContainer__form' onSubmit={handleSubmit}>
              <div className='messages'>
        {errorMessage()}
        {successMessage()}
      </div>
        <h3>Sign Up</h3>
      <div className='connectContainer__label'>

      <div className='connectContainer__label--lastName label'>
          <label className='labelInput'>Last name</label>
          <input 
            type="text" 
            className='input'
            placeholder="Last name" 
            onChange={handleLasttName}
            />
        </div>
        
        <div className='connectContainer__label--firstName label'>
          <label className='labelInput'>First name</label>
          <input
            type="text"
            className='input'
            placeholder="First name"
            onChange={handleFirstName}
          />
        </div>



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
        <div className='connectContainer__submit'>
          <button type="submit">
            Sign Up
          </button>
        </div>
        {/* <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p> */}
      </form>
    )
  }

export default Register