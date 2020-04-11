import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './constant/Navigation'

import Login from './components/accounts/Login'

import Test from './components/dashboard/test'

import * as ROUTES from './constant/Route';

import SignUp from './components/accounts/SignUp';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path = {ROUTES.DEFAULT} component = {Login}/>

      <Route path = {ROUTES.LOGIN} component = {Login}/>
      <Route path = {ROUTES.SIGN_UP} component = {SignUp}/>
      
      <Route path = {ROUTES.TEST} component = {Test}/>

    </div>

  </Router>
);
export default App;
