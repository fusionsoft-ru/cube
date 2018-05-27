import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UsersList from './components/UsersList';
import Dashboard from './components/Dashboard';
import RegisterPage from './containers/RegisterPage';
import NotFound from './components/NotFound';
import 'bootstrap3/dist/css/bootstrap.css';
import './assets/css/main.css';
import './assets/css/misc.css';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/register' component={RegisterPage} />
			<Route exact path='/users' component={UsersList} />
			<Route path='/cube' component={Dashboard} />
			<Route path='*' component={NotFound} />
		</Switch>
	</BrowserRouter>, 
	document.getElementById('root')
);