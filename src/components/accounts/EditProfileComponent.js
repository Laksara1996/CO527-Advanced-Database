import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from 'react-avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import 'react-datepicker/dist/react-datepicker.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

import image1 from '../../assests/profile/pr1.jpg';

const useStyles = makeStyles((theme) => ({
	uploadRoot: {
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	input: {
		display: 'none'
	}
}));

class EditProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			profilePic: '',
			displayName: '',
			dateofBirth: new Date(),
			gender: '',
			status: '',
			registereDate: new Date()
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		console.log('Current State is: ' + JSON.stringify(this.state));
		alert('Current State is: ' + JSON.stringify(this.state));
	}

	handleInputChange(event) {
		console.log(event.target);
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleGender = (isex) => {
		console.log(isex);
		this.setState({
			gender: isex
		});
	};
	handleImage = (image) => {
		console.log(image);
	};
	handleStatus = (iStatus) => {
		this.setState({
			status: iStatus
		});
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<Avatar
							style={{ marginLeft: 50, marginTop: 100 }}
							src={image1}
							name="Wim Mostmans"
							size="150"
							round={true}
						/>
						<div className={useStyles.uploadRoot}>
							<input
								accept="image/*"
								onChange={(event) => {
									console.log(event);
									// this.readFile(event)
								}}
								onClick={(event) => {
									console.log('Click');
									console.log(event);
									event.target.value = null;
								}}
								className={useStyles.input}
								id="contained-button-file"
								multiple
								type="file"
								hidden
							/>
							<label htmlFor="contained-button-file">
								<Button
									variant="contained"
									color="primary"
									component="span"
									style={{ marginLeft: 75, marginTop: 10 }}
								>
									Upload
								</Button>
							</label>
						</div>
					</div>
					<div className="col-12 col-md-5 m-1">
						<Container component="main" maxWidth="xs">
							<Form onSubmit={this.handleSubmit}>
								<FormGroup>
									<Form onSubmit={this.handleSubmit}>
										<FormGroup col>
											<Label htmlFor="displayname">
												<strong>Display Name</strong>
											</Label>
											<Col>
												<Input
													type="text"
													id="displayName"
													name="displayName"
													placeholder="e.g. Davy Jones"
													value={this.state.displayName}
													onChange={this.handleInputChange}
												/>
											</Col>
										</FormGroup>
										<FormGroup col>
											<Label htmlFor="title">
												<strong>Date of Birthday</strong>
											</Label>
											<Col>
												<Input
													type="date"
													name="dateofBirth"
													id="Date"
													value={this.state.dateofBirth}
													onChange={this.handleInputChange}
												/>
											</Col>
										</FormGroup>
										<FormGroup col>
											<Label htmlFor="title">
												<strong>Gender</strong>
											</Label>
											<Col>
												<RadioGroup onChange={this.handleGender} horizontal>
													<RadioButton value="female">Female</RadioButton>
													<RadioButton value="male">Male</RadioButton>
													<RadioButton value="other">Other</RadioButton>
												</RadioGroup>
											</Col>
										</FormGroup>
										<FormGroup col>
											<Label htmlFor="title">
												<strong>Status</strong>
											</Label>
											<Col>
												<RadioGroup onChange={this.handleStatus} horizontal>
													<RadioButton value="doctor">Doctor</RadioButton>
													<RadioButton value="patient">Patient</RadioButton>
													<RadioButton value="other">Other</RadioButton>
												</RadioGroup>
											</Col>
										</FormGroup>
										<FormGroup col>
											<Label htmlFor="title">
												<strong>Registered Date</strong>
											</Label>
											<Col>
												<Input
													type="date"
													name="registereDate"
													id="registereDate"
													value={this.state.registereDate}
													onChange={this.handleInputChange}
												/>
											</Col>
										</FormGroup>
										<FormGroup row>
											<Col md={{ size: 10, offset: 2 }}>
												<Button
													type="submit"
													color="primary"
													variant="contained"
												>
													Save Profile
												</Button>
											</Col>
										</FormGroup>
									</Form>
								</FormGroup>
							</Form>
						</Container>
					</div>
				</div>
			</div>
		);
	}
}

export default EditProfile;
