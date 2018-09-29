import React, { Component } from 'react'
import RowFacet from './RowFacet'
import ColFacet from './ColFacet'


class PivotTable extends Component {
  render() {
    return (
      <div className="container">
        <RowFacet/>
        <ColFacet/>
      </div>
    )
  }
}

export default PivotTable
