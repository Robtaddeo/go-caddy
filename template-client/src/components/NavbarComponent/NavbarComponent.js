import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './NavbarComponent.css';

export default class NavbarComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			links: [
				{
					name: 'Home',
					path: '/'
				},
				{
					name: 'Golf',
					path: '/golf'
				},
				{
					name: 'Membership',
					path: '/memberships'
				},
				{
					name: 'Weddings',
					path: '/weddings'
				},
				{
					name: 'Private Events',
					path: '/private-events'
				}
			],
			path: '',
			logoSrc: "http://triompher.ancorathemes.com/wp-content/uploads/2017/11/logo.png"
		};
	}

	handleLink = (link) => {
		if (typeof link.children != 'undefined') {
			return (
				<NavDropdown title={link.name} key={link.name} id="basic-nav-dropdown" className='link-item'>
					{link.children.map((child) => {
						return <NavDropdown.Item key={child.name} href={child.path}>{child.name}</NavDropdown.Item>;
					})}
				</NavDropdown>
			);
		} else {
			return (
				<Nav.Link key={link.name} href={link.path} className='link-item'>
					{link.name}
				</Nav.Link>
			);
		}
	};

	render() {
		return (
			<div>
				<Navbar bg="light" expand="lg" className="navbar">
					<Navbar.Brand href="#home">
						<img src={this.state.logoSrc} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" clas>
						{this.state.links.map((link) => this.handleLink(link))}
					</Navbar.Collapse>
					<Nav.Link>
						<Button variant="warning" className="nav-btn">BOOK A TEE TIME</Button>
					</Nav.Link>
				</Navbar>
			</div>
		);
	}
}
