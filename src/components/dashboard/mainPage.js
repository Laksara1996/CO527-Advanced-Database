import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constant/Route';

import Appbar from './AppBar'

const Test = () => (
  <div>
    <Appbar/>
    <TestForm />
  </div>
);


class TestFormBase extends Component { 
  render() {
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
)(TestFormBase);

export default Test;
export { TestForm };