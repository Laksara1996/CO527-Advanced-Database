import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Container, Button, Card, CardImg } from 'reactstrap';

import './DashboardStyles.css';
import image1 from '../../assests/profile/pr1.jpg';

class Home extends Component {
	render() {
		return (
			<div>
				<Container>
					<div className="row row-content">
						<div className="col-12 col-xs-12 col-md-10">
							<h3>Questions</h3>
						</div>
						<div className="col-12 col-xs-12 col-md-2">
							<Link to="/askquestion">
								<Button color="info" block>
									Ask Question
								</Button>
							</Link>
						</div>
					</div>
					<div className="row row-content">
						<Card className="col-12">
							<CardImg top src={image1} alt="None" />
						</Card>
					</div>
				</Container>
			</div>
		);
	}
}

export default Home;
