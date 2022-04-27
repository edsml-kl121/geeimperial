import React, { useEffect, useState } from "react";
import AppDataService from "../../services/app"
import { Link, NavLink, useLocation } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
        <Container sx={{ py: 2 }} maxWidth="md">
          {/* End hero unit */}
            <h1>This is Contact</h1>
            <p>List of apps</p>
            <div className="form-group">
            <label htmlFor="description">Create App</label>
              <Stack
                component="form"
                sx={{
                  width: '100%',
                }}
                spacing={2}
                noValidate
                autoComplete="off"
              >
              <TextField
                id="name-input"
                name="text"
                label="app"
                type="text"
                value={app}
                // helperText={text === "" ? 'Empty!' : ' '}
                onChange={handleInputChange}
              />
              <TextField
                id="name-input"
                name="text"
                label="link"
                type="text"
                value={applink}
                // helperText={text === "" ? 'Empty!' : ' '}
                onChange={handleInputChange2}
              />
          <Button onClick={saveApp} >
            Submit
          </Button>
            </Stack>
          </div>
          <Grid container spacing={4}>
            {apps.map((app) => (
              <Grid item key={app} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {app.name}
                    </Typography>
                    <Typography>
                      {app.link}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to = {`/contact/${app._id}`} state={{id: app._id, user_id: props.user}}><Button size="small">View</Button></Link>
                    {props.user ? <Button onClick={() => removeApp(app._id)} size="small">Delete</Button> : ""}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
  );
}
