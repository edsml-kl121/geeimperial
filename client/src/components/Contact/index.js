import React, { useEffect, useState } from "react";
import AppDataService from "../../services/app"

export default function Contact() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    retrieveApps();
  }, []);

  const retrieveApps = () => {
    AppDataService.getAll()
      .then(response => {
        console.log(response.data);
        setApps(response.data.apps);
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  const initialReviewState = ""
  const [app, setApp] = useState(initialReviewState)

  const handleInputChange = event => {
    setApp(event.target.value);
    console.log(event.target.value);
  }

  const saveApp = () => {
    var data = {name: app};
    AppDataService.createApp(data)
    .then(res => {
      console.log(res.data)
      setApps([...apps, data])
    })
    .catch(e => {
      console.log(e);
    })
  }

  const removeApp = (id) => {
    
    const index = apps.findIndex((obj) => { return obj._id === id})
    AppDataService.deleteApp(id)
    .then(res => {
      if (index !== -1)  {
          const temp = [...apps];
          console.log(...apps)
          temp.splice(index, 1)
          setApps(temp);
        }
        console.log('RES', res);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="main">
      <h1>This is Contact</h1>
      <div className="form-group">
        <label htmlFor="description">Create Review</label>
        <input
          type="text"
          className="form-control"
          id="text"
          required
          value={app}
          onChange={handleInputChange}
          name="text"
        />
      </div>
      <button onClick={saveApp} className="btn btn-success">
        Submit
      </button>
      <p>List of apps</p>
      {/* <p>{JSON.stringify(restaurants[0]._id)}</p> */}
      {apps.map((app) => {
        return (
        <>
          <p key = {app._id}>name: {app.name}</p>
          <a key = {app._id + "1"} onClick={() => removeApp(app._id)} className="btn btn-primary col-lg-5 mx-1 mb-1">Delete</a>
        </>
        )
      })}
      {/* <p>{restaurants[0]}</p> */}
    </div>
  );
}
