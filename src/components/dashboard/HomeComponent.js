import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';


class Home extends Component { 
  render() {
    return (
      <div>
        <Link to='/askquestion'>
          <Button>
            Ask Question
          </Button>
        </Link>
      </div>
    );
  }
}

export default Home;