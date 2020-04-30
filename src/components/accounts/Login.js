import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {LoginButton} from './GoogleSignIn';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth:500,
    textAlign: 'center',
    margin:10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    color: 'black',
    textDecoration: 'Bold',
    textAlign: 'center',
  },
  loginbtn:{
    width:400,
  },
  pos: {
    marginBottom: 12,
  },
});

export const LoginCard = (props)=> {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Login To Origyn Healthcare
        </Typography>
        <LoginButton className={classes.loginbtn}/>
        <Typography className={classes.pos} color="textSecondary">
          Not a member yet? &nbsp;
          <Button variant="outlined" color="primary" size="small" >Join now</Button>
        </Typography>
        
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}