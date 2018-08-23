/*
function collectNodes(node, props) {
  props.nodes.push(node)
}

function findNode(node, props) {
  // console.log(node.name == props.name)
  if(node.name == props.name) {
    return node
  }
}

function clone(tree) {
    return JSON.parse(JSON.stringify(tree));
}

function traverse(tree, visitor, props) {
  var result = {}
  tree.forEach(node => {
    result = visitor(node, props)
    if(node.children) {
      return traverse(node.children, visitor, props, result)
    }
  })
  return result
}

function reduce(initialTree, visitor, props, tree) {
  initialTree.forEach(node => {
    tree.push(visitor(node, props))
    if(node.children) {
      traverse(node.children, visitor, props)
    }
  })
  return tree
}
*/

const initialState = {
	"dimensions": [
		{
			"label": "Defect",
			"name": "defect",
			"plural": "defects",
			"toggled": true,
			"type": "list",
			"values": [
				"Cracks",
				"Blister",
				"Grinding",
				"Layering",
				"Inclusions"
			],
      "children": [
        "company",
        "reason"
      ]
    },
		{
			"label": "Company",
			"name": "company",
			"plural": "companies",
			"toggled": false,
			"type": "list",
			"values": [
				"Apple",
				"Summsung",
				"HTC"
			],
			"children" : [
        "department"
      ]
    },
		{
			"label": "Department",
			"name": "department",
			"plural": "departments",
			"toggled": false,
			"type": "list",
			"values": [
				"Engineering",
				"Marketing",
				"Sales and Support",
				"Design",
				"Strategy"
			]
		},
		{
			"label": "Reason",
			"name": "reason",
			"plural": "reasons",
			"toggled": false,
			"type": "list",
			"values": [
				"Materials",
				"Logistics",
				"Faults",
				"Skills"
			],
      "children": [
        "quality"
      ]
		},
		{
			"label": "Quality",
			"name": "quality",
			"plural": "qualities",
			"toggled": false,
			"type": "list",
			"values": [
				"Good",
				"Intermediate",
				"Bad"
			],
			"children": [
        "standart"
      ]
    },
		{
			"label": "Standart",
			"name": "standart",
			"plural": "standarts",
			"toggled": false,
			"type": "list",
			"values": [
				"ISO 8000",
				"ISO 9000",
				"ISO 9001"
			]
		}
	]
}
//
// var nodes = []
// var tree = []
// var node = {}
// var res = traverse(initialState.dimensions, findNode, { name: 'standart'})
// // traverse(initialState.dimensions, collectNodes, { nodes })
console.log(initialState)
// console.log(clone(initialState))
