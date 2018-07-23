import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import NotFound from '../components/NotFound'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
    		<Switch>
    			<Route exact path='/' component={Dashboard} />
    			<Route path='*' component={NotFound} />
    		</Switch>
    	</BrowserRouter>
    )
  }
}

export default App
