import React from 'react';
import './App.css';
import NodePage from './Components/NodeCard/NodePage';
import AppNavbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './Components/Hero/Hero';
import AboutSection from './Components/AboutSection/AboutSection';

function App() {
	return (
		<div className="App">
			<div className="App-header wrapper ">
				<AppNavbar />
				<HeroSection />
				<AboutSection />
				<NodePage />
			</div>
		</div>
	);
}

export default App;
