import React, { Component } from 'react'


class DimensionsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "nodes": [
        {
          "toggled": false,
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
              "toggled": false,
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
                  "toggled": false,
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
              "toggled": false,
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
          "toggled": false,
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
              "toggled": false,
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
  }

  header = []
  body = []
  level = 0
  traverse(nodes) {
  	nodes.forEach(node => {
      this.header.push(
        <th>
          {node.label}
          <a href="/"><i className="table-arrow arrow-right"></i></a>
        </th>)
      // console.log('  '.repeat(level) + node.label)
  		if(node.opened && typeof node.children !== 'undefined') {
        this.level++
  			this.traverse(node.children)
  		}
  	})
    this.level--
  }

  drillDown() {
    // handleClick() {
    //   this.setState(prevState => ({
    //     isToggleOn: !prevState.isToggleOn
    //   }));
    // }
  }


	render() {
    this.traverse(this.state.nodes)
		/*
    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 3; j++) {
        cols = []
        for(var k = 0; k < 2; k++) {
          if(j != 0) {
            cols.push(
              <td className="collapsed toggling">
                {this.state.dimensions[k].values[j]}
              </td>
            )
          } else {
            cols.push(
              <td className="collapsed toggling">
                {'' + '-' + j}
              </td>
            )
          }
        }
        rows.push( <tr> {cols} </tr> )
      }
    }
  */
    // table(this.state.nodes)
		return (
			<div className="cube-left-block">
				<table className="options-table">
          <tr>{this.header}</tr>
				</table>
			</div>
  	)
  }
}

export default DimensionsTable
