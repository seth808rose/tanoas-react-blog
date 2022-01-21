import React, { useState } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
// import { useEffect } from "react/cjs/react.development";

const TopBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 75) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavBackground);

  const user = true;
  return (
    <div className={navbar ? "top active" : "top"}>
      <div className='upperLeft'>
        <Link to='/settings'>
          <i className='header-home-icon far fa-user fa-2x'></i>
        </Link>
      </div>
      <div className='upperCenter'>
        <ul className='topList'>
          <Link to='/'>
            <li className='list-items'>Home</li>
          </Link>
          <Link to='/create'>
            <li className='list-items'>Create</li>
          </Link>
          <Link to='/contact'>
            <li className='list-items'>Contact</li>
          </Link>
          <li className='list-items'>{user && "Logout"}</li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
