import './App.css';
import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

import {
  SaveImage as SaveImageAction
} from '../actions/App';

@connect(state => ({
  number: state.App.number
}), dispatch => ({
  saveImage: canvas => dispatch(SaveImageAction(canvas))
}))

class App extends React.Component {
  componentDidMount() {
    toast.configure();
  }

  onRequestClick = async () => {
    const { value } = document.querySelector('#request-url-input');
    const { data } = await axios.get(value);
    toast.info(JSON.stringify(data, null, 4), {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Paper className='result-panel'>
          <Typography variant="body1" component="h3">
            Allow trusted CORs requests
          </Typography>
        </Paper>
        <div>
          <TextField
            id="request-url-input"
            defaultValue="http://localhost:30030"
            margin="normal"
            inputProps={{ 'aria-label': 'bare' }}
          />
        </div>
        <Button variant="contained" color="primary" onClick={this.onRequestClick}>Request</Button>

        <Paper className='result-panel'>
          <Typography variant="body1" component="h3">
            Obtain context info about users, rooms
          </Typography>
        </Paper>
        <Button variant="contained" color="primary">getUserId</Button>
        <Button variant="contained" color="primary">getUserName</Button>
        <Button variant="contained" color="primary">getRoomName</Button>
        <Button variant="contained" color="primary">getRoomId</Button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </React.Fragment>
    );
  }
}

export default App;
