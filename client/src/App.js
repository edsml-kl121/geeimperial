import Layout from "./components/Layout";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "react-pro-sidebar/dist/css/styles.css";
// import "./styles/App.scss";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
// import StickyBox from "react-sticky-box";
// import FadeIn from 'react-fade-in';
// import { Fade } from "@mui/material";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout/>} >
            <Route index element={<Main/>} />
            <Route exact path="/Projects" element={<Projects/>} />
            <Route exact path="/Contact" element={<Contact/>} />

          </Route>
        </Routes>        
      </Router>
      </>    
  );
}

export default App;
