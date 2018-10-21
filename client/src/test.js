var tree = require('./utilities/tree')
var dimensions = require('./tests/initCols0')

console.log(tree.rowValues(dimensions, node=>!tree.isRoot(node)))
