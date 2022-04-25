import React, { useState, useEffect } from "react";
import { SpinnerCircular } from 'spinners-react';
import { useLocation } from "react-router-dom";
import AppDataService from "../../services/app"
import { Link } from "react-router-dom";

export default function App() {
  const variant = false;
  const initialApp = {
    id: null,
    name: "",
    link: ""
  };
  const [edit, setEdit] = useState(variant ? true : false)
  const [app, setApp] = useState(initialApp)
  const location = useLocation();
  const getApp = (id) => {
    AppDataService.get(id)
    .then(res => {
      setApp(res.data)
    })
    .catch(e => {
      console.log(e);
    })
  }
  useEffect(() => {
    getApp(location.state.id);
  }, [location.state.id]);

  const handleInputChange = (event) => {
    app.name = event.target.value
    setApp(app)
  }

  const handleInputChange2 = (event) => {
    app.link = event.target.value
    setApp(app)
  }
  const handleClose = () => {
    setEdit(true)
  };

  const saveApp = () => {
    var data = app;
    if (edit) {
      AppDataService.updateApp(data, location.state.id)
      .then(res => {
        setEdit(!edit);
        setApp(prevState => {
          return {...prevState, name: app.name}
        });
        console.log(res.data);
      })
    }
  }
  console.log(app)
  return (
    <div className="main">
      <h1>This is app</h1>
      <p>app: {app.name}</p>
      <p>Link: {app.link}</p>
      {edit ? (
      <div className="form-group">
          <label htmlFor="description">Edit App</label>
          <input
            type="text"
            className="form-control"
            id="text"
            required
            defaultValue={app.name}
            onChange={handleInputChange}
            name="text"
          />
          <input
            type="text"
            className="form-control"
            id="text"
            required
            defaultValue={app.link}
            onChange={handleInputChange2}
            name="text"
          />
        <button onClick={saveApp} className="btn btn-success">
          Submit
        </button>
        </div>
        ) : (
      <button variant={variant} onClick={handleClose} className="btn btn-success">Edit</button>
      // <p>hi</p>
      )}
      <h2>Reviews:</h2>
      <h2><Link to = {`/contact`} state={{id: app._id}}>Back</Link></h2>
    </div> 
  // </AnimateOnChange>
  );
}
