import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Arrow from './Arrow'
import { load } from '../actions'
import * as tree from '../utilities/tree'


export default class DimensionTable extends Component {
  onLoad() {
    console.log('onLoad')
    this.context.store.dispatch(load())
  }

  header() {
    const state = this.context.store.getState()
    var hcols = []
    tree.find(state.dimensions).forEach(dimension => {
      hcols.push(
        <th hidden={dimension.hidden}>
          {dimension.title}
            <Arrow
            id={dimension.id}
            toggled={dimension.toggled}
             />
        </th>
      )
    })
    const thead = <tr> {hcols} </tr>
    return thead
  }

  render() {
    const state = this.context.store.getState()
    var arrays = []
    tree.find(state.dimensions).forEach(item => {
      if(!item.hidden) {
        arrays.push(item.values)
      }
    })

    var walks = []
    tree.traverse(state.dimensions, walks)
    console.log(walks);
    var data = walks[arrays.length-1]
    // console.log(data);

    var rows = []
    for(var i=0; i<data.length; i++) {
      var cols = []
      for(var j=0; j<data[i].length; j++) {
        cols.push(<td> {data[i][j]} </td>)
      }
      rows.push(<tr> {cols} </tr>)
    }

    // var lengths = arrays.map(array => array.length)
    // console.log('len ' + lengths);
    // for(var i = 0; i < arrays.length; i++) {
    //   arrays.forEach(array => {
    //     array.forEach(elem => {
    //
    //     })
    //   })
    // }

    //
    // const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
    // const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);
    // const data = cartesian(...arrays)
    // console.log('mydata' + data)
    // console.log('data: ', typeof data);
    // var tbody = []
    // data.forEeach(row => {
    //   var trow = []
    //   row.forEach(col => {
    //     trow.puch(<td> {col} </td>)
    //   })
    //   tbody.push(<tr> {trow} </tr>)
    // })
    // for(var i = 0; i < arrays.length; i++) {
    //   var trow = []
    //   for(var j = 0; j < array[i].length; j++) {
    //     for(var k = 0; k < ; k++) {
    //       trow.push()
    //     }
    //   }
    // }
    // arrays.forEach(array => {
    //   var trow = []
    //   array.forEach(item => {
    //     trow.push(item)
    //   })
    //   trows.push(trow)
    // })
    // console.log(trows)
    // thead = 'this.header()'
    return (
      <div className="container">
        <div className="cube-left-block">
          {
          // <button onClick={this.onLoad.bind(this)}>
          //   Load
          // </button>
        }
    			<table className="options-table">
            <thead> {this.header()} </thead>
            <tbody> {rows} </tbody>
    			</table>
    		</div>
      </div>
    )
  }
}

DimensionTable.contextTypes = {
  store: PropTypes.object
}
