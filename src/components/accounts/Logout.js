import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withFirebase } from '../firebase';
import { compose } from 'recompose';

import { withRouter } from 'react-router-dom';

import * as ROUTES from '../../constant/Route';

const SignOutPage = () => (
    <div>
        <SignOutForm />
    </div>
)

class SignOutFormBase extends Component {
    onClick = event => {
        this.props.firebase
            .doSignOut()
            .then((res) => {
                console.log("Response Logout",res);
                this.props.firebase.state.login = false;
                this.props.history.push(ROUTES.LOGIN);
            })
            .catch(error => {
                console.log(error)
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
            </div>
        );
    }

}

const SignOutForm = compose(
    withRouter,
    withFirebase,
)(SignOutFormBase);

export default SignOutPage;
export { SignOutForm };