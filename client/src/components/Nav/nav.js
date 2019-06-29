import React, {Component} from 'react';
import {NavItem, Navbar} from "react-materialize";

class Nav extends Component {

	render() {
		return (
			<Navbar alignLinks="left">
				<a href="/main" className="brand-logo center">A Friend in Need</a>
			<NavItem href= '/main'>
			Home
			</NavItem>
			<NavItem href="/forum">
			Forum
			</NavItem>
			<NavItem href="/signUp">
			Register
			</NavItem>
			<NavItem href="/signIn">
			Login
			</NavItem>
			</Navbar>
		)}
}

export default Nav;