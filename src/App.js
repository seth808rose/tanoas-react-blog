import React from "react";
import TopBar from "./topbar/TopBar";
import Header from "./header/Header";
import Home from "./pages/home/Home";
import Single from "./single/Single";
import Post from "../src/post/Post";
import Create from "../src/create/Create";
import Setup from "../src/setup/Setup";
import Write from "../src/";
import Login from "../src/login/Login";
import Register from "./register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Contact from "./contact/Contact";

const App = () => {
  const user = true;
  return (
    <React.Fragment>
      <Router>
        <TopBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={user ? <Home /> : <Register />} />
          <Route path='/login' element={user ? <Home /> : <Login />} />
          <Route path='/create' element={user ? <Create /> : <Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route
            path='/post/:postId'
            element={user ? <Single /> : <Register />}
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
