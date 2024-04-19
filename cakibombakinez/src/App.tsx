import React from 'react';
import './App.css';
import NodePage from './components/NodeCard/NodePage';
import AppNavbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

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
