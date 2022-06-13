import React, { useState, useEffect } from "react";
import { SpinnerCircular } from 'spinners-react';
import { useLocation } from "react-router-dom";
import AppDataService from "../../services/app"
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function App(props) {
  const variant = false;
  const initialApp = {
    id: null,
    name: "",
    link: ""
  };
  const [edit, setEdit] = useState(variant ? true : false)
  const [app, setApp] = useState(initialApp)
  const [reviews, setReviews] = useState([])
  // const [review, setReview] = useState({name: "", text: "", app_id: "", user_id: ""})
  // const [showreview, setShowreview] = useState(false);
  const [formval, setFormval] = useState(true)
  const [text, setText] = useState("");
  const location = useLocation();
  console.log("loc",location.state.user_id);
  const getApp = (id) => {
    AppDataService.get(id)
    .then(res => {
      setApp(res.data)
    })
    .catch(e => {
      console.log(e);
    })
  }


  const checkForm = (text) => {
    if (text.length > 10 || text.length === 0){
      return false
    }
    return true
  }

  const getReviews = (id) => {
    AppDataService.getAppReviews(id)
    .then(res => {
      setReviews(res.data)
    })
    .catch(e => {
      console.log(e);
    })
  }

  useEffect(() => {
    getApp(location.state.id);
    getReviews(location.state.id);
  }, [location.state.id]);


  const handleChange = (event) => {
    setText(event.target.value)
  }
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
        // console.log(res.data);
      })
    }
  }

  const saveReview = (id) => {
    console.log("hi")
    var data = {app_id: location.state.id, text: text, user_id: location.state.user_id._id, name: location.state.user_id.name};
    if  (!checkForm(text)) {
      // alert("invalid character")
      setFormval(false)
    }
    else {
      AppDataService.createReview(data)
      .then(res => {
        console.log(res.data)
        setReviews([...reviews, data])
        setFormval(true)
      })
      .catch(e => {
        console.log(e);
      })
    }
  }
  const [loading, setLoading] = React.useState(true);

  const hideSpinner = () => {
    setLoading(false)
  };
  return (
    <div className="main">
      <div className="container mb-5">
        <h1>{app.name}</h1>
        <p>n this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the different s, the router renders the matching .Note: Behind the scenes a  renders an with a real href, so people using the keyboard for navigation or screen readers will still be able to use this app.</p>
        <p>Link: {app.link}</p>
          { loading ? <SpinnerCircular size= "100" style= {{marginLeft: 100, textAlign: "center"}}/> : null}
        <iframe src = {app.link} title ="Mew" height = "500px" width = "1000px" onLoad={hideSpinner} style = {{ display: loading ? "none" : ""}}/>
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
          <Button onClick={saveApp} variant="contained" color="success">
            Submit
          </Button>
          </div>
          ) : (
        <Button variant={variant} onClick={handleClose} color="success">Edit</Button>
        // <p>hi</p>
        )}
        <h2>Reviews:</h2>
        {reviews.map((review) => {
          return (
          <>
          <p>{review.name} : {review.text}, {location.state.user_id ? (location.state.user_id._id === review.user_id ? <Button variant="contained" color="success">can edit</Button>: "" ) : ""}</p>
          
          </>
            )
          })}
        
        {location.state.user_id ?
        (
          <>
          {/* <input
            name = "text"
            value={text}
            onChange={handleChange}
            type="text"
            placeholder="review"
            /> */}
            <TextField
              id="name-input"
              name="text"
              label="Name"
              type="text"
              value={text}
              helperText={text === "" ? 'Empty!' : ' '}
              onChange={handleChange}
            />
            <br></br>
        <Button type = "submit" onClick={saveReview} variant="contained" color="success"> Click here to add a review</Button>
          </>
        )
        : "Please Login to add a review"}
        {formval ? "" : <p>Invalid input please put in 1-10 characters</p>}
        <h2><Link to = {`/contact`} state={{id: app._id}}>Back</Link></h2>
      </div> 
  {/* // </AnimateOnChange> */}
    </div>
  );
}
