import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar: React.FC = () => {
	return (
		<Navbar bg="dark" variant="dark" className={'d-flex justify-content-center'}>
			<Nav className={'d-flex justify-content-between'}>
				<Nav.Link href="#home" className={'mx-4'}>Home</Nav.Link>
				<Nav.Link href="#get-started" className={'mx-4'}>Get Started</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default AppNavbar;
