function isRoot(current) {
  return current.id === ''
}

function isLeaf(current) {
  return typeof current.children === 'undefined'
}

function clone(current) {
    return JSON.parse(JSON.stringify(current));
}

function find(current, predicate = node => true) {
  var nodes = []
  if(predicate(current)) {
    nodes.push(current)
  }
  if(current.children) {
    current.children.forEach(child => {
      nodes.push(...find(child, predicate))
    })
  }
  return nodes
}

function findOne(current, predicate = node => true) {
  return find(current, predicate)[0] || {}
}

function update(current, predicate = node => true, fields={}) {
  var nodes = find(current, predicate)
  nodes.forEach(node => {
    Object.assign(node, fields)
  })
  return current
}

function updateOne(root, predicate = node => true, visitor) {
  var copy = clone(root)
  var node = findOne(copy, predicate)
  visitor(node)
  return copy
}

const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
const cart = (a, b, ...c) => (b ? cart(f(a, b), ...c) : a);

function traverse() {
	var data = []
	function wrapper(root, predicate = node => true, visitor) {
    if(predicate(root)) {
			data.push(visitor(root))
			if(root.children) {
				root.children.forEach(node => {
					wrapper(node, predicate, visitor)
				})
			}
		}
	  return data
	}
	return wrapper
}

function titles(root) {
  var data = traverse()(root, node => node.hidden === false, node => node.title)
  return data
}

function values(root) {
  var data = traverse()(root, node => node.hidden === false, node => node.values)
//  var prod = []
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
  clone,
  traverse,
	titles,
	values
}
