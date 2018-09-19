function isRoot(node) {
  return node.id === ''
}

function isLeaf(node) {
  return typeof node.children === 'undefined'
}

function clone(node) {
    return JSON.parse(JSON.stringify(node));
}

function find(node, predicate = node => true) {
  var nodes = []
  if(predicate(node)) {
    nodes.push(node)
  }
  if(node.children) {
    node.children.forEach(child => {
      nodes.push(...find(child, predicate))
    })
  }
  return nodes
}

function findOne(node, predicate = node => true) {
  return find(node, predicate)[0] || {}
}

function update(node, predicate = node => true, fields={}) {
  var copy = clone(node)
  var nodes = find(copy, predicate)
  nodes.forEach(node => {
    Object.assign(node, fields)
  })
  return node
}

function updateOne(node, predicate = node => true, visitor) {
  var copy = clone(node)
  var the_node = findOne(copy, predicate)
  if(the_node) {
    visitor(the_node)
  }
  return copy
}

const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
const cart = (a, b, ...c) => (b ? cart(f(a, b), ...c) : a);

function traverse() {
	var data = []
	function wrapped(node, predicate = node => true, visitor) {
    if(predicate(node)) {
			data.push(visitor(node))
			if(node.children) {
				node.children.forEach(node => {
					wrapped(node, predicate, visitor)
				})
			}
		}
	  return data
	}
	return wrapped
}

function values(node) {
  var data = traverse()(node, node => node.hidden === false, node => node.values)
	if (data.length > 1)
	  return cart(...data)
  else
		return [['*']]
}


module.exports = {
  isRoot,
  isLeaf,
  find,
  findOne,
  update,
  updateOne,
  traverse,
  clone,
	values
}
