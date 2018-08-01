import React, { Component } from 'react'
import FactTable from '../components/FactTable'
import DimensionTable from '../components/DimensionTable'


class PivotTable extends Component {
  render() {
    return (
			<div className="container">
				<DimensionTable />
        <FactTable />
			</div>
    )
  }
}

export default PivotTable
