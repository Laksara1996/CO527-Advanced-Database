import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Input, Collapse, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
									<NavLink className="nav-link" to="/profile">
										<span className="fa fa-user fag-lg">Profile</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<Input type="search" name="search" placeholder="search" id="search" len />
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
