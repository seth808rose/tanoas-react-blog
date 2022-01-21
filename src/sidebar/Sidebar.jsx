import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div style={{ marginTop: "20px" }} className='sb'>
        <div className='sbItem'>
          <div className='sbTitle'>ABOUT ME</div>
          <div className='sbImg'></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            numquam aut eum expedita fuga provident tempore possimus eius cumque
          </p>
        </div>
        <div className='sbItem'>
          <span className='sbTitle'>Categories</span>
          <ul className='sbList'>
            <li className='sbListItem'>Movies</li>
            <li className='sbListItem'>Sports</li>
            <li className='sbListItem'>Style</li>
            <li className='sbListItem'>Life</li>
            <li className='sbListItem'>Discounts</li>
            <li className='sbListItem'>Tech</li>
          </ul>
        </div>
        <div className='sbItem'>
          <span className='sbTitle'>Check Us Out!</span>
          <div className='sbSocial'>
            <i className='sbIcons fab fa-instagram'></i>
            <i className='sbIcons fab fa-facebook'></i>
            <i className='sbIcons fab fa-twitter'></i>
            <i className='sbIcons fab fa-linkedin'></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
