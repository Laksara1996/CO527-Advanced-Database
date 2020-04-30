import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constant/Route';
import { withFirebase } from '../firebase'

import Appbar from './AppBar'

const Test = () => (
  <div>
    <Appbar/>
    <TestForm />
  </div>
);


class TestFormBase extends Component { 
  render() {
    console.log(this.props.firebase.state.login)

    return (
      <div>
        <Link to={ROUTES.AskQuestion}>
          <Button>
            Ask Question
          </Button>
        </Link>
      </div>
    );
  }
}

const TestForm = compose(
  withRouter,
  withFirebase,
)(TestFormBase);

export default Test;
export { TestForm };