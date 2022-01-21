import React from "react";
import { Link } from "react-router-dom";

import "./login.css";

const Login = () => {
  return (
    <div className='login'>
      <div className='loginTitle'>Login</div>
      <form className='loginForm'>
        <label>Email</label>
        <input
          type='text'
          className='loginInput'
          placeholder='enter your email'
        />
        <label>Password</label>
        <input
          type='password'
          className='loginInput'
          placeholder='enter your password...'
        />
        <button className='loginButton'>Login</button>
      </form>
      <button className='loginRegisterButton'>
        <Link
          style={{ textDecoration: "none" }}
          className='loginRegisterButton'
          to='/register'
        >
          register
        </Link>
      </button>
    </div>
  );
};

export default Login;
