import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({ setAuth }) => {
  const [inputValues, setInputValues] = useState({
    last_name: '',
    first_name: '',
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
      const response = await fetch(
        "http://localhost:3001/jwtAuth/register",
        {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            Accept:"application/json",
            "Access-control-Allow-origin": "*"
          },
          body: JSON.stringify(inputValues)
        }
      );
      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success('Votre compte est bien enregistré');
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };


    return (

      <form className='connectContainer__form' onSubmit={handleSubmit}>
        <h3>Créer mon compte</h3>
      <div className='connectContainer__label'>

      <div className='connectContainer__label--lastName label'>
          <label className='labelInput'>Nom</label>
          <input 
            type="text" 
            className='input'
            placeholder="Nom" 
            value={inputValues.last_name}
            name="last_name"
            onChange={(e)=>handleChange(e)}
            />
        </div>
        
        <div className='connectContainer__label--firstName label'>
          <label className='labelInput'>Prénom</label>
          <input
            type="text"
            className='input'
            placeholder="Prénom"
            name="first_name"
            value={inputValues.first_name}
            onChange={handleChange}
          />
        </div>



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
            S'enregistrer
          </button>
        </div>
        <ToastContainer />
      </form>
    )
  }

export default Register;