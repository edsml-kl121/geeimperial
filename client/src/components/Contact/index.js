import React, { useEffect, useState } from "react";
import AppDataService from "../../services/app"
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Contact(props) {
  const [apps, setApps] = useState([]);
  const initialReviewState = ""
  const [app, setApp] = useState(initialReviewState)
  const [applink, setApplink] = useState(initialReviewState)
  const [edit, setEdit] = useState(false);
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



  const handleInputChange = event => {
    setApp(event.target.value);
  }
  const handleInputChange2 = event => {
    setApplink(event.target.value);
  }
  // const handleInputChangeName = event => {
  //   edit(event.target.value);
  // }
  // const handleInputChangeLink = event => {
  //   setEdit(event.target.value);
  // }

  const saveApp = () => {
    console.log("hi")
    var data = {name: app, link: applink};
    if (edit) {
      AppDataService.updateApp(data)
      .then(res => {
        setEdit(!edit);
      })
    } else {
      AppDataService.createApp(data)
      .then(res => {
        console.log(res.data)
        setApps([...apps, data])
      })
      .catch(e => {
        console.log(e);
      })
    }
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
        <label htmlFor="description">Create App</label>
        <input
          type="text"
          className="form-control"
          id="text"
          required
          value={app}
          onChange={handleInputChange}
          name="text"
        />
        <input
          type="text"
          className="form-control"
          id="text"
          required
          value={applink}
          onChange={handleInputChange2}
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
        <div key = {app._id}> 
          <h2>name: <Link to = {`/contact/${app._id}`} state={{id: app._id, user_id: props.user}}>{app.name}</Link></h2>
          <p>link: {app.link}</p>
          {props.user ? <a onClick={() => removeApp(app._id)} className="btn btn-primary col-lg-5 mx-1 mb-1">Delete</a> : ""}
        </div>
        </>
        )
      })}
      {/* <p>{restaurants[0]}</p> */}
    </div>
  );
}
