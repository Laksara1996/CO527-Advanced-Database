import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { MDBInput } from 'mdbreact';

// import Logo from '../assests/images/logo.png';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleLogin(event) {
		this.toggleModal();
		alert(
			'Username: ' +
				this.username.value +
				' Password: ' +
				this.password.value +
				' Remember: ' +
				this.remember.checked
		);
		event.preventDefault();
	}

	render() {
		return (
			<React.Fragment>
				<Navbar dark expand="md">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className="left" href="/">
							Health Forum
						</NavbarBrand>
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to="/home">
										<span className="fa fa-home fag-lg">Home</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<MDBInput
										hint="Search"
										type="text"
										containerClass="active-pink active-pink-2 mt-0 mb-3"
									/>
								</NavItem>
							</Nav>

							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink className="nav-link" to="/login">
										<Button outline onClick={this.toggleModal}>
											<span className="fa fa-sign-in fa-lg" /> Login
										</Button>
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default Header;
