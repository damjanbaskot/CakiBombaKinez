import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './Pages/MainPage';
import SignupPage from './signup/Signup';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<MainPage />}/>
				<Route path={'/signup'} element={<SignupPage />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App;
