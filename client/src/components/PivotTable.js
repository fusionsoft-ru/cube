import React, { Component } from 'react'
// import FactTable from '../components/FactTable'
import DimensionTable from '../components/DimensionTable'


class PivotTable extends Component {
  render() {
    return (
      <div className="container">
        <DimensionTable dimensions={this.props.dimensions}/>
      </div>
    )
  }
}

export default PivotTable
