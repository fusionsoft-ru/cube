import * as tree from '../utilities/tree'
import initCols from '../tests/initCols0'

function colReducer(state=initCols, action) {
  switch(action.type) {
		case 'COL_TOGGLE':
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

export default colReducer
