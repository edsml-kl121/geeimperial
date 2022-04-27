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
import { BrowserRouter as Router, Route, Routes, Navigate, useContext, createContext } from "react-router-dom";
import React, { useEffect } from "react";
// import StickyBox from "react-sticky-box";
// import FadeIn from 'react-fade-in';
// import { Fade } from "@mui/material";

function Mainapp() {
  const persistentUserData = localStorage.getItem('user-data')
  // const [user, setLoginUser] = React.useState(null);
  const [user, setLoginUser] = React.useState(persistentUserData);
  console.log("user", user)
  async function login(user = null) {
    setLoginUser(user);
  }

  async function logout() {
    setLoginUser(null)
  }

  return (
    <>
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Layout/> } > */}
            <Route exact path="/" element={<Layout logout = {logout}/>} >
            {/* <Route exact path="/" element={user ? <Layout logout = {logout}/> : <Login login = {login}/>} > */}
            <Route index element={user ? <Main/> :  <Login login = {login}/>} />
            <Route exact path="/projects" element={<Projects/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/contact" element={<Contact user = {user}/> } />
            <Route exact path="/contact/:id" element={<App/>} />
          </Route>
        </Routes>        
      </Router>
      </>    
  );
}

export default Mainapp;
