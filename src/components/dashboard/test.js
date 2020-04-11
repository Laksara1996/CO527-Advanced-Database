import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import * as ROUTES from '../../constant/Route';

import { withFirebase } from '../firebase'

import SignOut from '../accounts/Logout'

const Test = () => (
  <div>
    <h1>Test</h1>
    <SignOut/>
    <TestForm />
  </div>
);


class TestFormBase extends Component {
  constructor(props) {
    super(props);

  }

  
  render() {
    console.log(this.props.firebase.state.login)

    return (
      <div>
          Test
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