import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='smallTitle'>Tanoa's</span>
        <span className='largeTitle'>Blog</span>
      </div>
      <div className='headerImg'></div>
    </div>
  );
};

export default Header;
