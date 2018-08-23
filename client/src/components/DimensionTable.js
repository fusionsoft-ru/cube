import React, { Component } from 'react'
import '../actions'


class DimensionsTable extends Component {
  constructor(props) {
    super(props)
    this.state = props
  }
  arrow(dimension) {
    if(dimension.visible) {
      if(dimension.children){
        return <i className="table-arrow arrow-right" />
      }
    } else {
      if(dimension.children){
        return <i
          className="table-arrow arrow-down"
          />
      }
    }
  }

  toggle(dimension) {
    console.log('Arrow pressed')
  }

  header = []
  body = []
  level = 0
  traverse(dimensions) {
  	dimensions.forEach(dimension => {
      if(dimension.visible) {
        this.header.push(
          <th>
            {dimension.label}
            <a onClick={this.toggle}>{this.arrow(dimension)}</a>
          </th>)
        // console.log('  '.repeat(level) + node.label)
        console.log(dimension.visible)
    		if(typeof dimension.children !== 'undefined') {
          this.level++
    			this.traverse(dimension.children)
    		}
      }
  	})
    this.level--
  }

	render() {
    // this.traverse(this.state.dimensions)
		/*
    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 3; j++) {
        cols = []
        for(var k = 0; k < 2; k++) {
          if(j != 0) {
            cols.push(
              <td className="collapsed toggling">
                {this.state.dimensions[k].values[j]}
              </td>
            )
          } else {
            cols.push(
              <td className="collapsed toggling">
                {'' + '-' + j}
              </td>
            )
          }
        }
        rows.push( <tr> {cols} </tr> )
      }
    }
  */
    // table(this.state.nodes)
		return (
			<div className="cube-left-block">
				<table className="options-table">
          <tr>{this.header}</tr>
				</table>
			</div>
  	)
  }
}

export default DimensionsTable
