import React, { Component } from 'react'

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      last_name:"",
      first_name:"",
      email:"",
      password:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };



  handleSubmit(event){
    event.preventDefault();
    const { last_name, first_name, email, password } = this.state;
    console.log(last_name, first_name, email, password);
    fetch("http://localhost:3001/",{
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
  }

  render() {
    return (
      <form className='connectContainer__form'onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
      <div className='connectContainer__label'>
        
        <div className='connectContainer__label--firstName label'>
          <label className='labelInput'>First name</label>
          <input
            type="text"
            className='input'
            placeholder="First name"
            onChange={event=>this.setState({first_name: event.target.value})}
          />
        </div>

        <div className='connectContainer__label--lastName label'>
          <label className='labelInput'>Last name</label>
          <input 
            type="text" 
            className='input'
            placeholder="Last name" 
            onChange={event=>this.setState({last_name: event.target.value})}
            />
        </div>

        <div className='connectContainer__label--email label'>
          <label className='labelInput'>Email address</label>
          <input
            type="email"
            className='input'
            placeholder="Enter email"
            onChange={event=>this.setState({email: event.target.value})}
          />
        </div>

        <div className='connectContainer__label--password label'>
          <label className='labelInput'>Password</label>
          <input
            type="password"
            className='input'
            placeholder="Enter password"
            onChange={event=>this.setState({password: event.target.value})}
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
}