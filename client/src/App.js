import Layout from "./components/Layout";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import App from "./components/App";
import Login from "./components/Login"
import Register from "./components/Register"
import "react-pro-sidebar/dist/css/styles.css";
// import "./styles/App.scss";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
// import StickyBox from "react-sticky-box";
// import FadeIn from 'react-fade-in';
// import { Fade } from "@mui/material";

function Mainapp() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout/>} >
            <Route index element={<Main/>} />
            <Route exact path="/Projects" element={<Projects/>} />
            <Route exact path="/Contact" element={<Contact/>} />
            <Route exact path="/Contact/:id" element={<App/>} />
            <Route exact path="/login" element={<Login login = {login}/>} />
            <Route exact path="/register" element={<Register/>} />
            {/* <Route 
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          /> */}
          </Route>
        </Routes>        
      </Router>
      </>    
  );
}

export default Mainapp;
