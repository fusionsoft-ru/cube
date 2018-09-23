function find(nodes, predicate = node => true, visitor) {
	var result = []
	nodes.forEach(node => {
	  if(predicate(node)) {
			result.push(visitor(node))
	  }
		if(node.children) {
			result.push(...find(node.children, predicate, visitor))
		}
	})
  return result
}

function findOne(nodes, predicate = node => true, visitor = node => node) {
  return find(nodes, predicate, visitor)[0]
}

function clone(nodes) {
	var result = []
	nodes.forEach(node => {
		result.push(JSON.parse(JSON.stringify(node)))
	})
	return result
}

function updateOne(nodes, predicate = node => true, visitor = node => node) {
  var copy = clone(nodes)
  var node = findOne(copy, predicate)
  if(node) {
    visitor(node)
  }
  return copy
}

function isRoot(node) {
  return node.name === 'root'
}

function isLeaf(node) {
  return typeof node.children === 'undefined'
}

function isHidden(node) {
  return node.hidden === true
}

const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))))
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a)

function labels(nodes) {
  var result = find(
		nodes,
		node => !isHidden(node),
		node => node.label
	)
	return result
}

function values(nodes) {
  var result = find(
    nodes,
    node => !isHidden(node),
    node => ['All ' + node.plural, ...node.values]
  )
  var product = [['*']]
	if (result.length > 1) {
	  product = cartesian(...result)
  }
	return product
}

function drillDown(node) {
  node.toggled = !node.toggled
  if(!isLeaf(node)) {
		node.children.forEach( child => {
			child.hidden = !child.hidden
		})
  }
}

function drillUp(node) {
  node.toggled = false
  if(!isLeaf(node)) {
		node.children.forEach( child => {
			child.hidden = true
			child.toggled = false
			drillUp(child)
		})
  }
}

function drillToggle(node) {
  if(!node.toggled) {
		drillDown(node)
	} else {
		drillUp(node)
	}
}

module.exports = {
  find,
  findOne,
  clone,
  updateOne,
  isRoot,
  isLeaf,
  isHidden,
  values,
  labels,
	drillDown,
	drillUp,
	drillToggle
}
