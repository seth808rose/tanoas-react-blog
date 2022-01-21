import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className='register'>
      <div className='registerTitle'>Register</div>
      <form className='registerForm'>
        <label>Username</label>
        <input
          type='text'
          className='registerInput'
          placeholder='enter your username'
        />
        <label>Email</label>
        <input
          type='text'
          className='registerInput'
          placeholder='enter your email'
        />
        <label>Password</label>
        <input
          type='password'
          className='registerInput'
          placeholder='enter your password...'
        />
      </form>
      <button className='registerRegisterButton'>Register</button>
      <button className='registerRegisterButton'>
        <Link
          style={{ textDecoration: "none" }}
          className='registerRegisterButton'
          to='/login'
        >
          login
        </Link>
      </button>
    </div>
  );
};

export default Register;
