import React from "react";
import { SpinnerCircular } from 'spinners-react';


export default function Main() {
  const [loading, setLoading] = React.useState(true);

  const hideSpinner = () => {
    setLoading(false)
  };
  return (
    <div className="main">
      <h1>This is main
      </h1>
      
      { loading ? <SpinnerCircular size= "100" style= {{marginLeft: 100, textAlign: "center"}}/> : null}
      <iframe src = "https://mewchayutaphong.users.earthengine.app/view/clickpanel" title ="Mew" height = "500px" width = "1000px" onLoad={hideSpinner} style = {{ display: loading ? "none" : ""}}/>
    </div>
  // </AnimateOnChange>
  );
}
