import React from "react";
import "./setup.css";

const Setup = () => {
  return (
    <div className='setup'>
      <div className='setupWrapper'>
        <div className='setupTitle'>
          <span className='setupUpdateTitle'>Update Your Account</span>
          <span className='setupDeleteTitle'>Delete your Account</span>
        </div>
        <form className='setupForm'>
          <label>Profile Picture</label>
          <div className='setupPP'>
            <img
              src='https://images.pexels.com/photos/10134613/pexels-photo-10134613.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
            />
            <label htmlFor='fileInput'>
              <i className='setupPPIcon far fa-user-circle'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type='text' placeholder='Rose' />
          <label>Username</label>
          <input type='email' placeholder='email@email' />
          <label>Password</label>
          <input type='password' />
          <button className='setupSubmit'>Update</button>
        </form>
      </div>
    </div>
  );
};

export default Setup;
