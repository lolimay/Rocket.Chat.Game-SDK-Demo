import './App.css';
import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import {
  SaveImage as SaveImageAction
} from '../actions/App';

@connect(state => ({
  number: state.App.number
}), dispatch => ({
  saveImage: canvas => dispatch(SaveImageAction(canvas))
}))

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Paper className='result-panel'>
          <Typography variant="body1" component="h3">
            Allow trusted CORs requests
          </Typography>
        </Paper>
        <div class="list-panel">
        <TextField
          id="outlined-bare"
          defaultValue="http://localhost:30030"
          margin="normal"
          inputProps={{ 'aria-label': 'bare' }}
        />
        </div>
        <Button variant="contained" color="primary">Request</Button>

        <Paper className='result-panel'>
          <Typography variant="body1" component="h3">
            Obtain context info about users, rooms
          </Typography>
        </Paper>
        <Button variant="contained" color="primary">getUserId</Button>
        <Button variant="contained" color="primary">getUserName</Button>
        <Button variant="contained" color="primary">getRoomName</Button>
        <Button variant="contained" color="primary">getRoomId</Button>
      </React.Fragment>
    );
  }
}

export default App;
