import React, { Component } from 'react'
import PivotTable from '../components/PivotTable'


class Dashboard extends Component {
  render() {
    return (
			<div className="container">
				<PivotTable
          dimensions={this.props.dimensions}
          facts={this.props.facts}
          />
			</div>
    )
  }
}

export default Dashboard
