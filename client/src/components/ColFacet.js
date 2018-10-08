import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as tree from '../utilities/tree'
import ColArrow from './ColArrow'


class ColFacet extends Component {
  header() {
    const state = this.context.store.getState()
    var labels = tree.labels(state.cols)
    var cols = labels.map( label =>
      <th>
        {label}
        <ColArrow
          label={label}
        />
      </th>)
    var rows = <tr> {cols} </tr>
    return rows
  }

  render() {
    return (
      <div className="cube-right-block">
  			<table className="data-table-header">
  				<tr>
  					<th>Some other dimension value<a onclick="chooseDimension(this);"><i className="table-arrow arrow-down"></i></a></th>
  				</tr>
  			</table>
  			<div className="table-responsive">
  				<table className="data-table">
            {this.header()}
  				</table>
  			</div>
  		</div>
    )
  }
}

ColFacet.contextTypes = {
  store: PropTypes.object
}

export default ColFacet
