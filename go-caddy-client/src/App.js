import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// MUI Stuff
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// Pages
import home from './pages/home';
// import commerce from './pages/features/commerce';
// import support from './pages/features/support';
// import websites from './pages/features/websites';

// Components
import Navbar from './components/Navbar';

const theme = createMuiTheme({
	typography: {
		fontFamily: [ 'Rubik', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif' ].join(',')
	}
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={home} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
