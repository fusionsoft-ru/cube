import React, { Component } from 'react'
import { dimensionToggle } from '../actions'
import * as tree from '../utilities/tree'

export default class Arrow extends Component {
  onToggle() {
    console.log('drill: ' + this.props.id)
    this.context.store.dispatch(dimensionToggle(this.props.id))
  }

  render() {
    const state = this.context.store.getState()
    const toggled = tree.findOne(state.dimensions, dimension => {
      return dimension.id == this.props.id
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
Arrow.contextTypes = {
  store: React.PropTypes.object
}
