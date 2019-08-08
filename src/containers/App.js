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

import { AppEmbeddedSDK } from '../lib/client/AppEmbeddedSDK';

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

  async getUserInfo() {
    const sdk = new AppEmbeddedSDK();
    const user = await sdk.getUserInfo();
    console.log(JSON.stringify(user, null, 4));
  }

  async getRoomInfo() {
    const sdk = new AppEmbeddedSDK();
    const room = await sdk.getRoomInfo();
    console.log(JSON.stringify(room, null, 4));
  }

  async getSessionId() {
    const sdk = new AppEmbeddedSDK();
    const sessionId = await sdk.getSessionId();
    console.log(JSON.stringify(sessionId, null, 4));
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
            Obtain context info about users
          </Typography>
        </Paper>
        <Button variant="contained" color="primary" onClick={this.getUserInfo}>getUserInfo</Button>

        <Paper className='result-panel'>
          <Typography variant="body1" component="h3">
            Obtain context info about rooms
          </Typography>
        </Paper>        
        <Button variant="contained" color="primary" onClick={this.getRoomInfo}>getRoomInfo</Button>

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
