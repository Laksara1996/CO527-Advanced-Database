import React from 'react';
import { GoogleLogin,GoogleLogout} from 'react-google-login'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const onLoginSuccess = (response) => {
    console.log(response);
}

const onLogoutSuccess = (response) => {
    console.log(response);
}

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(2),
      width:300,
    },
}));

const LoginButton = props=>{
    
    const classes = useStyles();
    
    return(
    <GoogleLogin
        clientId="821281703539-vgdo19eh7l5gk81sgj0v13si38onqt7s.apps.googleusercontent.com"
        buttonText="Continue with Google"
        render={renderProps=>(
        <Button variant="contained" color="secondary" 
        className={classes.button} startIcon={<AccountCircleIcon/>}
        onClick={renderProps.onClick} disabled={renderProps.disabled}
        >
            Continue with Google
        </Button>
        
        )}
        onSuccess={onLoginSuccess}
        onFailure={onLoginSuccess}
        cookiePolicy={'single_host_origin'}
    />
    );
}

const LogoutButton = props =>{
    return(
    <GoogleLogout
      clientId="821281703539-vgdo19eh7l5gk81sgj0v13si38onqt7s.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={onLogoutSuccess}
      onFailure={onLogoutSuccess}
    >
    </GoogleLogout>
    );
}
export {LoginButton,LogoutButton}

