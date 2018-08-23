import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

const initialState = {
	"dimensions": [
		{
			"label": "Defect",
			"name": "defect",
			"plural": "defects",
			"visible": true,
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
					"label": "Company",
					"name": "company",
					"plural": "companies",
					"visible": false,
					"type": "list",
					"values": [
						"Apple",
						"Summsung",
						"HTC"
					],
					"children" : [
						{
							"label": "Department",
							"name": "department",
							"plural": "departments",
							"visible": false,
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
					"label": "Reason",
					"name": "reason",
					"plural": "reasons",
					"visible": false,
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
			"label": "Quality",
			"name": "quality",
			"plural": "qualities",
			"visible": true,
			"type": "list",
			"values": [
				"Good",
				"Intermediate",
				"Bad"
			],
			"children": [
				{
					"label": "Standart",
					"name": "standart",
					"plural": "standarts",
					"visible": false,
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

const store = createStore(reducers, initialState)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
