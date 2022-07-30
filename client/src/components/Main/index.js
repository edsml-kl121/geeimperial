import React from "react";
// import water from '../../images/water.jpeg'
import About from "./components/about"
import Info from "./components/info"
import Contact from "./components/contact"
import "./main.css"

export default function Main() {
  // const [loading, setLoading] = React.useState(true);

  // const hideSpinner = () => {
  //   setLoading(false)
  // };
  return (
    <div className="main bg-light">
      <About/>
      <Info/>
      <Contact/>
    </div>
  );
}
