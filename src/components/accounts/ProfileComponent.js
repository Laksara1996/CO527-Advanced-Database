import React, { Component } from 'react';
import { Nav, Container, NavItem, NavLink, Card, Col, CardImg, Row, CardBody, CardTitle } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';

import image1 from '../../assests/profile/pr1.jpg';

class Profile extends Component {
	render() {
		return (
			<Container>
				<div className="row">
					<Nav pills>
						<div className="row">
							<div className="col">
								<NavItem>
									<NavLink active href="/profile" className="nav-link">
										Profile
									</NavLink>
								</NavItem>
							</div>
							<div className="col">
								<NavItem>
									<NavLink active href="/editprofile">
										Edit Profile
									</NavLink>
								</NavItem>
							</div>
						</div>
					</Nav>
					<Row>
						<div className="col-12 col-md-5 m-1">
							<Card>
								<CardImg top src={image1} alt="None" />
							</Card>
						</div>
						<div className="col-12 col-md-5 m-1">
							<h3>Gayal Laksara</h3>
						</div>
					</Row>
				</div>
			</Container>
		);
	}
}

export default Profile;
