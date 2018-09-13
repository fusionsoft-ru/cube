
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

function traverse(current, walks=[], paths=[]) {
  // console.log(current);
  var nextPaths = []
  // var pred =
  if(paths.length) {
    paths.forEach(path => {
      current.values.forEach(value => {
        nextPaths.push([...path,value])
      })
    })
  } else {
    nextPaths = [...current.values]
  }

  // console.log(nextPaths)
  walks.push(nextPaths)
  if(current.children) {
    current.children.forEach(child => {
      traverse(child, walks, nextPaths)
    })
  }
  return nextPaths
}


module.exports = {
  isRoot,
  isLeaf,
  find,
  findOne,
  update,
  updateOne,
  clone,
  traverse
}
