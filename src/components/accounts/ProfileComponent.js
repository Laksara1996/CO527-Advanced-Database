import React, { Component } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

class Profile extends Component {
	render() {
		return (
			<div>
				<React.Fragment>
					<Nav pills>
						<NavItem>
							<NavLink className="nav-link" to="/home">
								Link
							</NavLink>
						</NavItem>
					</Nav>
				</React.Fragment>
			</div>
		);
	}
}

export default Profile;
