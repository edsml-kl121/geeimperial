import React, { useEffect, useState } from "react";
import RestaurantDataService from "../../services/app"

export default function Contact() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    retrieveApps();
  }, []);

  const retrieveApps = () => {
    RestaurantDataService.getAll()
      .then(response => {
        console.log(response.data);
        setApps(response.data.apps);
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="main">
      <h1>This is Contact
      </h1>
      <p>hias</p>
      {/* <p>{JSON.stringify(restaurants[0]._id)}</p> */}
      {apps.map((app) => {
        return(<p>name: {app.name}</p>)
      })}
      {/* <p>{restaurants[0]}</p> */}
    </div>
  );
}
