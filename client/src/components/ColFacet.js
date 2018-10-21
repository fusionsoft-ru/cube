import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as tree from '../utilities/tree'
import ColArrow from './ColArrow'


class ColFacet extends Component {
  header() {
    const state = this.context.store.getState()
    var labels = tree.labels(state.cols,
      node => !tree.isHidden(node)
    )
    // var roots = tree.labels(state.cols, node => tree.isRoot(node))
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

    body() {
        const state = this.context.store.getState()
		    var data = tree.colValues(state.cols, node => !tree.isHidden(node))
        var rows = []
		    var i = 0
		    var j = 0

		    data.forEach(item => {
		        var cols = []
            item.forEach(elem => {
                cols.push(<td key={'td_' + j}>{elem}</td>)
				        j++
			      })
			      rows.push(<tr key={'tr_' + i}>{cols}</tr>)
			      i++
		    })
        return rows
	  }

  render() {
    return (
      <div className="cube-right-block">
  			<table className="data-table-header">
  				<tr>
  					<th>Time<a onclick="chooseDimension(this);"><i className="table-arrow arrow-down"></i></a></th>
  				</tr>
  			</table>
  			<div className="table-responsive">
  				<table className="data-table">
            <thead>{this.header()}</thead>
            <tbody>{this.body()}</tbody>
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
