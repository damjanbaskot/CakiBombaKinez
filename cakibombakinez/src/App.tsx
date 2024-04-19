import React from 'react';
import './App.css';
import NodePage from './Components/NodeCard/NodePage';
import AppNavbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './login/Login';
import SignupPage from './signup/Signup';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<AppNavbar/>
				<NodePage/>
			</header>
		</div>
	);
}

export default App;
