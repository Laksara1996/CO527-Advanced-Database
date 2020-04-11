import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from './Route';

import SignOut from '../components/accounts/Logout'


const Navigation = () => (
    <div>

        <Link to={ROUTES.LOGIN} />

        <Link to={ROUTES.SIGN_UP} />

        <Link to={ROUTES.TEST}/>

        <SignOut/>

    </div>
);

export default Navigation;