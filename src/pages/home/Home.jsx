import React from "react";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../header/Header";
import "./home.css";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='home'>
        <Sidebar />
        <Posts />
      </div>
    </React.Fragment>
  );
};

export default Home;
