var state = {
  "nodes": [
    {
      "isOpen": true,
      "name": "defect",
      "label": "Defect",
      "plural": "defects",
      "type": "list",
      "values": [
        "Cracks",
        "Blister",
        "Grinding",
        "Layering",
        "Inclusions"
      ],
      "children" : [
        {
          "isOpen": true,
          "name": "company",
          "label": "Company",
          "plural": "companies",
          "type": "list",
          "values": [
            "Apple",
            "Summsung",
            "HTC"
          ],
          "children" : [
            {
              "isOpen": false,
              "name": "department",
              "label": "Department",
              "plural": "departments",
              "type": "list",
              "values": [
                "Engineering",
                "Marketing",
                "Sales and Support",
                "Design",
                "Strategy"
              ]
            }
          ]
        },
        {
          "isOpen": false,
          "name": "reason",
          "label": "Reason",
          "plural": "reasons",
          "type": "list",
          "values": [
            "Materials",
            "Logistics",
            "Faults",
            "Skills"
          ]
        },
      ]
    },
    {
      "isOpen": true,
      "name": "quality",
      "label": "Quality",
      "plural": "qualities",
      "type": "list",
      "values": [
        "Good",
        "Intermediate",
        "Bad"
      ],
      "children": [
        {
          "isOpen": false,
          "name": "standart",
          "label": "Standart",
          "plural": "standarts",
          "type": "list",
          "values": [
            "ISO 8000",
            "ISO 9000",
            "ISO 9001"
          ]
        }
      ]
    }
  ]
}

var level = 0
function printy(nodes) {
	nodes.forEach(node => {
    console.log('  '.repeat(level) + node.label)
		if(node.isOpen && typeof node.children !== 'undefined') {
      level++
			printy(node.children)
		}
	})
  level--
}

function print(nodes) {
	nodes.forEach(node => {
    console.log('  '.repeat(level) + node.label)
    let isLeaf = typeof node.children === 'undefined'
    if(node.isOpen && !isLeaf) {
      level++
			print(node.children)
		}
	})
  level--
}


print(state.nodes)
// console.log(state.nodes)
