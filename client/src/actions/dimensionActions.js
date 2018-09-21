import * as tree from '../utilities/tree'

function dimensionDown(node) {
  node.toggled = !node.toggled
  if(!tree.isLeaf(node)) {
		node.children.forEach( child => {
			child.hidden = !child.hidden
		})
  }
}

function dimensionUp(node) {
  node.toggled = false
  if(!tree.isLeaf(node)) {
		node.children.forEach( child => {
			child.hidden = true
			child.toggled = false
			dimensionUp(child)
		})
  }
}

function dimensionToggle(node) {
  if(!node.toggled) {
		dimensionDown(node)
	} else {
		dimensionUp(node)
	}
}

export {
  dimensionDown,
  dimensionUp,
  dimensionToggle
}
