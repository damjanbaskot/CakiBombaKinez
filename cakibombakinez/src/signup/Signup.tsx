import {Button, Container, Form} from 'react-bootstrap';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../Stylesheets/Stylesheets.css'

const SignupPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [discordName, setDiscordName] = useState('');

	const navigate = useNavigate();

	const handleSignup = async () => {
		try {
			console.log('Signing up...');
			await new Promise((resolve) => setTimeout(resolve, 1000));
			console.log('Signup successful');
			alert('Signup successful');
		} catch (error: any) {
			if (error instanceof Error) {
				console.error('Signup error:', error.message);
				alert('Signup failed. Please try again.');
			}
		}
	};

	return (
		<Container className="d-flex justify-content-center align-items-center vh-100">
			<div className="w-50">
				<h1 className="mb-4">Signup Page</h1>
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

					<Form.Group controlId="formBasicDiscordName" className="mb-3">
						<Form.Label>Discord Name (optional)</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Discord name"
							value={discordName}
							onChange={(e) => setDiscordName(e.target.value)}
						/>
					</Form.Group>

					<Button variant="primary" onClick={handleSignup}>
						Sign Up
					</Button>
				</Form>
			</div>
		</Container>
	);
};

export default SignupPage;
