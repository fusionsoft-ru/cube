import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RowArrow from './RowArrow'
import * as tree from '../utilities/tree'


class RowFacet extends Component {
  header() {
    const state = this.context.store.getState()
    var cols = []
    var labels = tree.labels(state.rows)
    labels.forEach( (label, j) => {
      cols.push(
        <th	key={'th_' + j}>
          {label}
    			<RowArrow
    				label={label}
    			/>
        </th>
      )
    })
    var rows = <tr>{cols}</tr>
		return rows
  }

	body() {
    const state = this.context.store.getState()
    console.log(state)
		var data = tree.values(state.rows)
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
		this.body()
    return (
      <div className="cube-left-block">
  			<table className="options-table">
          <thead>{this.header()}</thead>
          <tbody>{this.body()}</tbody>
  			</table>
  		</div>
    )
  }
}

RowFacet.contextTypes = {
  store: PropTypes.object
}

export default RowFacet
