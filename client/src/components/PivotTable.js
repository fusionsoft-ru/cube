import React, { Component } from 'react'
import DimensionTable from './DimensionTable'
import FactTable from './FactTable'


class PivotTable extends Component {
  render() {
    return (
      <div>
        <DimensionTable/>
        <FactTable/>
      </div>
    )
  }
}

export default PivotTable
