import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <form className='connectContainer__form'>
        <h3>Sign In</h3>
        <div className='connectContainer__label'>
          <div className='connectContainer__label--email label'>
            <label className='labelInput'>Email address</label>
            <input
              type="email"
              className='input'
              placeholder="Enter email"
            />
          </div>
        
          <div className='connectContainer__label--password label'>
            <label className='labelInput'>Password</label>
            <input
              type="password"
              className='input'
              placeholder="Enter password"
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
}