import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const AppNavbar: React.FC = () => {
	return (
		<Navbar bg="dark" variant="dark" className={'d-flex justify-content-center'}>
			<Nav className={'d-flex justify-content-between'}>
				<Nav.Link as={Link} to="/signup" className="mx-4">Sign Up/Log In</Nav.Link>
				<Nav.Link as={Link} to="/" className="mx-4">Home</Nav.Link>
				<Nav.Link as={Link} to="/get-started" className="mx-4">Get Started</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default AppNavbar;
