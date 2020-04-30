import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './constant/Navigation'
import { LoginCard } from './components/accounts/Login'
import * as ROUTES from './constant/Route';
import SignUp from './components/accounts/SignUp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  contextdiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 10,
    minHeight:'90vh',
  },

});

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <NavBar/>
       
        <div className={classes.contextdiv}>
          <Route exact path={ROUTES.DEFAULT} component={LoginCard} />
          <Route path={ROUTES.LOGIN} component={LoginCard} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
        </div>
      </div>

    </Router>
  );
}
export default App;
