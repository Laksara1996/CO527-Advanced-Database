import React from 'react';
import Button from '@material-ui/core/Button';
import { withFirebase } from '../firebase';

import { Link } from 'react-router-dom';

import * as ROUTES from '../../constant/Route';

const SignOutButton = ({ firebase }) => (
    
    <Link to={ROUTES.LOGIN}>
        <Button onClick={firebase.doSignOut}>
            Logout
        </Button>
    </Link >
);

export default withFirebase(SignOutButton);