import React, { Component } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Content from '../components/Content'
import Settings from '../components/Settings'

class Dashboard extends Component {
  render() {
    return (
			<div className="container">
				<Header />
				<Menu />
				<Content />
				<Settings />
			</div>
    )
  }
}

export default Dashboard
