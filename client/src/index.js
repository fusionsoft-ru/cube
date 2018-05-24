import React from 'react'
import ReactDOM from 'react-dom'
// import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/cube' component={Dashboard} />
			<Route path='*' component={NotFound} />
		</Switch>
	</BrowserRouter>, 
	document.getElementById('container')
)