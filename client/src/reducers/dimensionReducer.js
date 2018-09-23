import * as tree from '../utilities/tree'
import initialDimensions from '../tests/initialDimensions'

function dimensionReducer(state=initialDimensions, action) {
  switch(action.type) {
		case 'DIMENSION_TOGGLE':
      var result = tree.updateOne(
        state,
        node => node.label === action.label,
        node => tree.drillToggle(node)
      )
			return result
	  default:
      return state
  }
}

export default dimensionReducer
