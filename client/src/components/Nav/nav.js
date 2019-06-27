import React, {Component} from 'react';
import {NavItem, Navbar} from "react-materialize";

class Nav extends Component {

	render() {
		return (
			<Navbar alignLinks="left">
			<NavItem href= '/main'>
			Main
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