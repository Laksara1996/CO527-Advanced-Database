import React, { Component } from 'react';
import { Nav, Container, NavItem, NavLink, Card, CardImg, Row } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';

import image1 from '../../assests/profile/pr1.jpg';
import './AccoutStyles.css';

class Profile extends Component {
	render() {
		return (
			<Container>
				<div className="row row-header">
					<Nav pills>
						<NavItem>
							<NavLink href="/profile" className="nav-link" active>
								Profile
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/editprofile">Edit Profile</NavLink>
						</NavItem>
					</Nav>
				</div>
				<div className="row row-content">
					<div className="col-12 col-md-5 m-1">
						<Card>
							<CardImg top src={image1} alt="None" />
						</Card>
					</div>
					<div className="col-12 col-md-5 m-1">
						<h3>Gayal Laksara</h3>
					</div>
				</div>
				<div className="row row-content">
					<div className="col-12">
						<h4>Answers (0)</h4>
					</div>
					<Card className="col-12">
						<CardImg top src={image1} alt="None" />
					</Card>
				</div>
				<div className="row row-content">
					<div className="col-12">
						<h4>Questions (0)</h4>
					</div>
					<Card className="col-12">
						<CardImg top src={image1} alt="None" />
					</Card>
				</div>
			</Container>
		);
	}
}

export default Profile;
