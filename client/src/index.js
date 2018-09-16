import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App'
import NotFound from './components/NotFound'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './reducers'
// import './assets/css/bootstrap.min.css'
// import './assets/css/bootstrap-reboot.css'
// import './assets/css/main.css'

const store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
