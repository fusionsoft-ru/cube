import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as tree from '../utilities/tree'

class DimensionArrow extends Component {
  onToggle() {
    this.context.store.dispatch({
        type: 'DIMENSION_TOGGLE',
        id: this.props.id
    })
  }

  render() {
    const state = this.context.store.getState()
    const toggled = tree.findOne(state.dimensions, dimension => {
      return dimension.id === this.props.id
    }).toggled
    const direction = toggled ? 'right' : 'down'
    return (
      <i
        onClick={this.onToggle.bind(this)}
        className={'table-arrow arrow-' + direction}
      />
    )
  }
}
DimensionArrow.contextTypes = {
  store: PropTypes.object
}

export default DimensionArrow
