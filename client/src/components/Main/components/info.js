import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { SpinnerCircular } from 'spinners-react';
import Fade from 'react-reveal/Fade';
import "./info.css"

export default function Info() {
  const [loading, setLoading] = React.useState(true);

  const hideSpinner = () => {
    setLoading(false)
  };
  return (
    <section id="info" className="bg-light">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-20">
          <AcademicCapIcon className=" inline-block mb-4 text-primary" style={{height:"70px"}} />
          <h1 className="text-primary mb-4">
            How &amp; it works?
          </h1>
          <h2 className="text-dark mb-5">
            You can view the repository of our apps and contribute to
            the water oracle by inserting the link to your apps. Below is an example of our app.
          </h2>
        <Fade left cascade>
          <div className="container">
          { loading ? <SpinnerCircular size= "100" style= {{marginLeft: 100, textAlign: "center"}}/> : null}
      <iframe src = "https://mewchayutaphong.users.earthengine.app/view/globalwaterapp" title ="Mew" className="row-full" onLoad={hideSpinner} style = {{ display: loading ? "none" : ""}}/>
          </div>
        </Fade>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}