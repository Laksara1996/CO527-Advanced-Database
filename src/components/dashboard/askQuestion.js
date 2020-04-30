import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constant/Route';
import { withFirebase } from '../firebase'

import Appbar from './AppBar'

const AskQuestion = () => (
  <div>
    <Appbar/>
    <AskQuestionFormBase />
  </div>
);


const root = {
    display: 'flex',
    flexWrap: 'wrap',
  }

const textField = {
    marginLeft: 20,
    marginRight: 20,
    width: '25ch',
}


class AskQuestionFormBase extends Component { 
  render() {
    return (
      <div className={root}>
        <div>
          <TextField
            id="standard-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="None"
            id="margin-none"
            defaultValue="Default Value"
            className={textField}
            helperText="Some important text"
          />
          <TextField
            label="Dense"
            id="margin-dense"
            defaultValue="Default Value"
            className={textField}
            helperText="Some important text"
            margin="dense"
          />
          <TextField
            label="Normal"
            id="margin-normal"
            defaultValue="Default Value"
            className={textField}
            helperText="Some important text"
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="filled-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            label="None"
            id="filled-margin-none"
            defaultValue="Default Value"
            className={textField}
            helperText="Some important text"
            variant="filled"
          />
          <TextField
            label="Dense"
            id="filled-margin-dense"
            defaultValue="Default Value"
            className={textField}
            helperText="Some important text"
            margin="dense"
            variant="filled"
          />
          <TextField
            label="Normal"
            id="filled-margin-normal"
            defaultValue="Default Value"
            className={textField}
            helperText="Some important text"
            margin="normal"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="outlined-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            label="None"
            id="outlined-margin-none"
            defaultValue="Default Value"
            className={textField}
            helperText="Some important text"
            variant="outlined"
          />
          <TextField
            label="Dense"
            id="outlined-margin-dense"
            defaultValue="Default Value"
            className={textField}
            helperText="Some important text"
            margin="dense"
            variant="outlined"
          />
          <TextField
            label="Normal"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={textField}
            helperText="Some important text"
            margin="normal"
            variant="outlined"
          />
        </div>
      </div>
    );
  }
}

const AskQuestionForm = compose(
  withRouter,
  withFirebase,
)(AskQuestionFormBase);

export default AskQuestion;
export { AskQuestionForm };