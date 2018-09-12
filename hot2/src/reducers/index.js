import { initialState } from '../utilities/initialState'
import * as tree from '../utilities/tree'

function toggle(node) {
  node.toggled = !node.toggled
  if(!tree.isLeaf(node)) {
    if(node.toggled == false) {
      node.children.forEach( child => {
        child.hidden = !child.hidden
        toggle(child)
      })
    } else {
      node.children.forEach( child => {
        child.hidden = !child.hidden
      })
    }
  }
}

export function reducer(state=initialState, action) {
  switch(action.type) {
    case 'LOAD':
      return {dimensions: tree.find(state.dimensions)}
		case 'DIMENSION_TOGGLE':
      var result = tree.updateOne(
        state.dimensions,
        node => node.id == action.id,
        node => toggle(node)
      )
			return { dimensions: result }
	  default:
      return state
  }
}
