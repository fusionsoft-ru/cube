import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DimensionArrow from './DimensionArrow'
import * as tree from '../utils/tree'


export default class DimensionTable extends Component {
  header() {
    const state = this.context.store.getState()
    var cols = []
    tree.find(state.dimensions).forEach(node => {
      cols.push(
        <th	key={node.id} hidden={node.hidden}>
          {node.title}
					<DimensionArrow
						id={node.id}
						toggled={node.toggled}
					/>
        </th>
      )
    })
    var rows = <tr>{cols}</tr>
		return rows
  }

	body() {
    const state = this.context.store.getState()
		var data = tree.values(state.dimensions)
    var rows = []
		var i = 0
		var j = 0

		data.forEach(item => {
		  var cols = []
      item.forEach(elem => {
        cols.push(<td key={'col_' + j}>{elem}</td>)
				j++
			})
			rows.push(<tr key={'row_' + i}>{cols}</tr>)
			i++
		})
    return rows
	}

  render() {
		this.body()
    return (
      <div className="container">
        <div className="cube-left-block">
    			<table className="options-table">
            <thead>{this.header()}</thead>
            <tbody>{this.body()}</tbody>
    			</table>
    		</div>
      </div>
    )
  }
}

DimensionTable.contextTypes = {
  store: PropTypes.object
}
