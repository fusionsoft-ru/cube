import React, { Component } from 'react'
import DashboardHeader from './DashboardHeader'
import PivotTable from './PivotTable'

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <DashboardHeader/>
        <PivotTable/>
      </div>
    )
  }
}

export default Dashboard
