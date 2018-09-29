import React, { Component } from 'react'
import CubeHeader from './CubeHeader'
import PivotTable from './PivotTable'

class Cube extends Component {
  render() {
    return (
      <div className="container">
        <CubeHeader/>
        <PivotTable/>
      </div>
    )
  }
}

export default Cube
