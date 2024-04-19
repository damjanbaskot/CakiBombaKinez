import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async () => {
		try {
			console.log('Logging in...');
			await new Promise((resolve) => setTimeout(resolve, 1000));
			console.log('Login successful');
		} catch (error: any) {
			if (error instanceof Error) {
				console.error('Login error:', error.message);
				alert('Login failed. Please try again.');
			}
		}
	};

	return (
		<Container className="d-flex justify-content-center align-items-center vh-100">
			<div className="w-50">
				<h1 className="mb-4">Login Page</h1>
				<Form>
					<Form.Group controlId="formBasicEmail" className="mb-3">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword" className="mb-3">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>

					<Button variant="primary" onClick={handleLogin}>
						Login
					</Button>
				</Form>
			</div>
		</Container>
	);
};

export default LoginPage;
