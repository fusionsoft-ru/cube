import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
// import Settings from './components/Settings'
import NotFound from './pages/NotFound';
import 'bootstrap3/dist/css/bootstrap.css';
// import 'jquery'
import './assets/css/main.css';
// import './assets/js/chosen.jquery.min.js'
// import 'bootstrap3/dist/js/bootstrap'

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/cube' component={Dashboard} />
			{/* <Route path='/settings' component={Settings} /> */}
			<Route path='*' component={NotFound} />
		</Switch>
	</BrowserRouter>, 
	document.getElementById('root')
);
