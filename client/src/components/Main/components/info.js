import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { SpinnerCircular } from 'spinners-react';
import Fade from 'react-reveal/Fade';

export default function Info() {
  const [loading, setLoading] = React.useState(true);

  const hideSpinner = () => {
    setLoading(false)
  };
  return (
    <section id="info">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-20">
          <AcademicCapIcon className=" inline-block mb-4 text-primary" style={{height:"70px"}} />
          <h1 className="text-primary mb-4">
            How &amp; it works?
          </h1>
          <p className="text-base leading-relaxed mx-auto">
            Some dummy text
          </p>
        <Fade left cascade>
          <div className="container">
          { loading ? <SpinnerCircular size= "100" style= {{marginLeft: 100, textAlign: "center"}}/> : null}
      <iframe src = "https://mewchayutaphong.users.earthengine.app/view/clickpanel" title ="Mew" height = "500px" width = "1000px" onLoad={hideSpinner} style = {{ display: loading ? "none" : ""}}/>
          </div>
        </Fade>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}