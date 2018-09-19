import { initialState } from '../tests/initialState'
import * as tree from '../utils/tree'

function down(node) {
  node.toggled = !node.toggled
  if(!tree.isLeaf(node)) {
		node.children.forEach( child => {
			child.hidden = !child.hidden
		})
  }
}

function up(node) {
  node.toggled = false
  if(!tree.isLeaf(node)) {
		node.children.forEach( child => {
			child.hidden = true
			child.toggled = false
			up(child)
		})
  }
}

function toggle(node) {
  if(!node.toggled) {
		down(node)
	} else {
		up(node)
	}
}

function dimensionSelector(state) {
	return state.dimensions
}

export function reducer(state=initialState, action) {
  switch(action.type) {
		case 'DIMENSION_TOGGLE':
      var result = tree.updateOne(
        dimensionSelector(state),
        node => node.id === action.id,
        node => toggle(node)
      )
			return { dimensions: result }
	  default:
      return state
  }
}
