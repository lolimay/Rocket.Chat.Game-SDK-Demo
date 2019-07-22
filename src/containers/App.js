import './App.css';
import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {
  SaveImage as SaveImageAction
} from '../actions/App';

@connect(state => ({
  number: state.App.number
}), dispatch => ({
  saveImage: canvas => dispatch(SaveImageAction(canvas))
}))

class App extends React.Component {
  onClearButtonClick() {
    const fabricCanvas = window.fabricCanvas;
    fabricCanvas.clear();
    fabricCanvas.backgroundColor = '#000000';
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
        <Button variant="contained" color="primary">Request</Button>

        <Paper className='result-panel'>
          <Typography variant="body1" component="h3">
            Allow trusted CORs requests
          </Typography>
        </Paper>
        <Button variant="contained" color="primary">Test</Button>
        <Button variant="contained" color="primary">Test</Button>
        <Button variant="contained" color="primary">Test</Button>
        <Button variant="contained" color="primary">Test</Button>
      </React.Fragment>
    );
  }
}

export default App;
