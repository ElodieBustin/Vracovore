import {useState} from 'react';

const Login = ({setAuth}) => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  }


  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/jwtAuth/login',{
      method: "POST",
      crossDomain:true,
      headers:{
        "Content-Type": "application/json",
        Accept:"application/json",
        "Access-control-Allow-origin": "*"
      },
      body:JSON.stringify(inputValues),
    });

    const parseRes = await response.json();
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

    return (
      <form className='connectContainer__form' onSubmit={handleSubmit}>

        <h3>Se connecter</h3>
        <div className='connectContainer__label'>
          <div className='connectContainer__label--email label'>
            <label className='labelInput'>Email</label>
            <input
              type="email"
              className='input'
              placeholder="Votre email"
              name="email"
              value={inputValues.email}
              onChange={handleChange}
            />
          </div>
        
          <div className='connectContainer__label--password label'>
            <label className='labelInput'>Mot de passe</label>
            <input
              type="password"
              className='input'
              placeholder="Votre mot de passe"
              name="password"
              value={inputValues.password}
              onChange={handleChange}
            />
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