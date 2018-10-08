import * as tree from '../utilities/tree'
import initRows from '../tests/initRows'

function rowReducer(state=initRows, action) {
  switch(action.type) {
		case 'ROW_TOGGLE':
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
