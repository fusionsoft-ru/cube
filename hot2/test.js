const initial = require('./src/utilities/initialState')
const tree = require('./src/utilities/tree')

var state = initial.initialState



walks = []
tree.traverse(state.dimensions, walks)
console.log(walks[1])
// console.log(JSON.stringify(walks, null,4))

// var dimensions = tree.clone(state.dimensions)
// console.log(
//   JSON.stringify(
//     tree.updateOne(
//       dimensions,
//       node => {
//         return node.name=='company'
//       },
//       node => {
//         node.name='pipo'
//         return true
//       }
//     ), null, 4
//   )
// )
// console.log(
//   JSON.stringify(
//     tree.findOne(
//       dimensions,
//       node => node.name=='pipo'
//     ), null, 4
//   )
// )

// tree.updateOne(dimensions, node => {
//   node.name == 'company'
// }, node => {
//   node.visible = !node.visible,
//   node.toggled = !node.toggled
// })
//
// console.log(JSON.stringify(tree.findOne(state.dimensions, node => {node.name == 'company'}),null,4))
// console.log(JSON.stringify(state.dimensions,null,4))
