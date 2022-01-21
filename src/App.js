import React from "react";
import TopBar from "./topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./single/Single";
import Create from "../src/create/Create";
import Login from "../src/login/Login";
import Register from "./register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
