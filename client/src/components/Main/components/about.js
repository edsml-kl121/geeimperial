// src/components/About.js

import React from "react";
// import Bathy from "./images/Bathy.png"
import Water from "../../../images/watercycle.png"
// import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import {Container, Row, Col } from "react-bootstrap"
// import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function About() {
  const [styles, setStyles] = useState({fontWeight:"400", fontSize:"30px"});
  return (
    <section id="about" className="bg-white">
      <Fade>
      <Container>
      <Row className="my-5">
        <Col xs={12} md={5} className="my-5">
          <br></br>
          <br></br>
          <br></br>

          <img
            className="object-cover object-center rounded w-100"
            alt="hero"
            src= {Water}
            />
        </Col>
        <Col md={1}>
        </Col>
        <Col xs={12} md={5}>
          <br></br>
          <br></br>
          
          <h1 className="mt-5 text-primary" style={{textAlign: "center", fontWeight:"700", fontSize:"80px"}}>
              Water Oracle
          </h1>
            <h2 className="text-black">
             Solutions to map water bodies using the WaterNet model
            </h2>
          <p className="text-left">
            A solution is created using <span className="text-primary">google earth engine, google cloud Platform, Tensorflow. </span>

          </p>
          <div className="text-center">
          <Link to="/projects" className="mx-2">
              <button type="button" className="btn btn-outline-primary py-2 my-2 mx-0 px-3">Explore Water now !</button>
          </Link>
          <a href="https://github.com/edsml-kl121/wateroracle" className="mx-2">
              <button type="button" className="btn btn-outline-primary py-2 my-2 mx-0 px-3">See Code</button>
          </a>
            </div>
          {/* </div> */}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      </Col>
      </Row>
      </Container>
      </Fade>
    </section>
  );
}