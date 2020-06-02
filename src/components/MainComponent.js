import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import EditProfile from './accounts/EditProfileComponent';
import { Login } from './accounts/LoginComponent';
import Header from './dashboard/HeaderComponent';
import AskQuestion from './dashboard/AskQuestionComponent';
import Home from './dashboard/HomeComponent';
import Profile from './accounts/ProfileComponent'

class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/home" component={Home} />
					<Route exact path="/askquestion" component={AskQuestion} />
					<Route exact path="/profile" component={Profile} />
                    <Route exact path="/editprofile" component={EditProfile} />
					{/* <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
					<Route path="/menu/:dishId" component={DishWithId} />
					<Route exact path="/contactus" component={Contact} />
					<Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} /> */}
					<Redirect to="/login" />
				</Switch>
				{/* <Footer /> */}
			</div>
		);
	}
}

export default Main;
