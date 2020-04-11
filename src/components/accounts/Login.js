import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import * as ROUTES from '../../constant/Route'

import {withFirebase} from '../firebase'


const paper = {
  marginTop: 50,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const avatar = {
  margin: 1,
  backgroundColor: 'red',
}

const form = {
  width: '100%',
  marginTop: 10,
}

const submit = {
  marginTop: 20,
  backgroundColor: "lightblue",
  color: "black"
}

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
  </div>
);
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
      const { email, password } = this.state;
      this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then((res) => {
              //console.log(res);
              this.props.firebase.state.login = true;
              this.setState({ ...INITIAL_STATE });
              this.props.history.push(ROUTES.TEST);
          })
          .catch(error => {
              this.setState({ error });
          });
      event.preventDefault();
  };
  onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (

      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div style={paper}>
          <Avatar style={avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
                  </Typography>
          <form onSubmit={this.onSubmit} style={form}>
            <TextField
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoComplete="email"
              autoFocus
            />
            <TextField
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoComplete="email"
              autoFocus
            />
            <Button
              disabled={isInvalid}
              type="submit"
              fullWidth
              variant="contained"
              style={submit}
            >
              Sign In
                      </Button>
          </form>
          <Button
            disabled={isInvalid}
            type="submit"
            fullWidth
            variant="contained"
            style={submit}
          >
            Sign in with Google
                  </Button>
          <Grid item>
            <Link to={ROUTES.SIGN_UP} variant="body2">
              <div style={{ marginTop: 20 }}>
                Don't have an account? Sign Up
                          </div>
            </Link>
          </Grid>
          {error && <p>{error.message}</p>}
        </div>
      </Container>

    );
  }
}
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm };