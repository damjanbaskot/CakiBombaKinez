import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HeroSection: React.FC = () => {
	return (
		<div className="hero-section text-center py-5">
			<Container>
				<h1>Lorem Ipsum</h1>
				<h2 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
				<Button variant="primary" size="lg">Get Started</Button>
			</Container>
		</div>
	);
};

export default HeroSection;
