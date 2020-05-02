import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

import {LoginButton} from './GoogleSignIn';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    width:200,
    height:200,
    marginRight:'auto',
  marginLeft:'auto',
    borderRadius:'50%', // 16:9
  },
  loginbtn:{
    width:400,
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [isSignedIn, setSignedIn] = React.useState(false);
  const [dpurl,setDpurl]=React.useState("https://static.boredpanda.com/blog/wp-content/uploads/2014/12/Top-10-photographers-for-travel-portraits16__700.jpg");
  
  const onSuccessSignIn = (response)=>{
    setDpurl(response.profileObj.imageUrl);
    setSignedIn(true);
    console.log(response.profileObj.imageUrl);
  }
  const onFailureSignIn = (response)=>{
    console.log(response);
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        title="SignUp to Origyn Healthcare"
      />
      <CardMedia
        className={classes.media}
        image={dpurl}
      />
      <CardContent>
        {isSignedIn?  
        <Button variant="outlined" size="large" color="primary">Continue To SignUp</Button>
        :
        <>
        <Typography variant="body2" color="textSecondary" component="p">
          First SignIn to your Google Account
        </Typography>
        <LoginButton className={classes.loginbtn} onLoginSuccess={onSuccessSignIn} onLoginFailure={onFailureSignIn}/>  
        </>
        }
      </CardContent>
      <CardActions disableSpacing>
               
      </CardActions>
      </Card>
  );
}
