import * as tree from '../utilities/tree'
import initialDimensions from '../tests/initialDimensions'
import { dimensionToggle } from '../actions/dimensionActions'

function dimensionReducer(state=initialDimensions, action) {
  switch(action.type) {
		case 'DIMENSION_TOGGLE':
      var result = tree.updateOne(
        state,
        node => node.id === action.id,
        node => dimensionToggle(node)
      )
			return result
	  default:
      return state
  }
}

export default dimensionReducer
