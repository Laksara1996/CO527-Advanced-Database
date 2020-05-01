import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './constant/Navigation'
import { Login } from './components/accounts/Login'
import * as ROUTES from './constant/Route';
import SignUp from './components/accounts/SignUp';
import { makeStyles } from '@material-ui/core/styles';

import Test from './components/dashboard/test'
import AskQuestion from './components/dashboard/askQuestion'

const useStyles = makeStyles({
  contextdiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 10,
    minHeight: '90vh',
  },

});

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <Navigation />

        <Route exact path={ROUTES.DEFAULT} component={Login} />

        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />

        <Route path={ROUTES.TEST} component={Test} />
        <Route path={ROUTES.AskQuestion} component={AskQuestion} />
      </div>

    </Router>
  );
}
export default App;
