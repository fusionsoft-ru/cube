import React, { Component } from 'react'
import Top from '../components/Top'
import Left from '../components/Left'
import Middle from '../components/Middle'

class Dashboard extends Component {
  render() {
    return (
			<div className="container">
				{/* <Top /> */}
				<Left />
				<Middle />
			</div>
    )
  }
}

export default Dashboard
