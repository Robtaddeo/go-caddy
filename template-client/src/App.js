import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './pages/home/home';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';

function App() {
	return (
		<div>
			<NavbarComponent />
			<Router>
				<Switch>
					<Route exact path="/" component={home} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
