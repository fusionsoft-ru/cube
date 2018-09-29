import * as tree from '../utilities/tree'
import icols from '../tests/icols'

function rowReducer(state=icols, action) {
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

export default rowReducer
