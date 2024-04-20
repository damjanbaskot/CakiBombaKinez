import AppNavbar from '../Components/Navbar/Navbar';
import HeroSection from '../Components/Hero/Hero';
import AboutSection from '../Components/AboutSection/AboutSection';
import NodePage from '../Components/NodeCard/NodePage';
import React from 'react';

const MainPage = () => {
	return (
		<div className={'App'}>
			<div className="App-header wrapper ">
				<AppNavbar/>
				<HeroSection/>
				<AboutSection/>
				<NodePage/>
			</div>
		</div>
	);
};
export default MainPage;