import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as tree from '../utilities/tree'

class RowArrow extends Component {
  onToggle() {
    this.context.store.dispatch({
        type: 'DIMENSION_TOGGLE',
        label: this.props.label
    })
  }

  render() {
    const state = this.context.store.getState()
    const toggled = tree.findOne(
      state.rows,
      node => node.label === this.props.label,
      node => node.toggled
    )
    const direction = toggled ? 'right' : 'down'
    return (
      <i
        onClick={this.onToggle.bind(this)}
        className={'table-arrow arrow-' + direction}
      />
    )
  }
}
RowArrow.contextTypes = {
  store: PropTypes.object
}

export default RowArrow
