import * as tree from '../utilities/tree'
import { initialState } from '../tests/initialState'
import { dimensionToggle } from '../actions/dimensionActions'

function dimensionReducer(state=initialState, action) {
  switch(action.type) {
		case 'DIMENSION_TOGGLE':
      var result = tree.updateOne(
        state.dimensions,
        node => node.id === action.id,
        node => dimensionToggle(node)
      )
			return { dimensions: result }
	  default:
      return state
  }
}

export {
  dimensionReducer
}
