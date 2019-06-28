import React, {Component} from 'react';
import {NavItem, Navbar} from "react-materialize";

class Nav extends Component {

	render() {
		return (
			<Navbar alignLinks="left">
				<a href="#" class="brand-logo center">A Friend in Need</a>
			<NavItem href= '/main'>
			Home
			</NavItem>
			<NavItem href="/forum">
			Forum
			</NavItem>
			<NavItem href="/signIn">
			Sign In
			</NavItem>
			<NavItem href="/signUp">
			Sign Up
			</NavItem>
			</Navbar>
		)}
}

export default Nav;