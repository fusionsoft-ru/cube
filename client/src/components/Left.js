import React from 'react'


class Left extends React.Component {
  constructor(props) {
    super(props)
		this.state = {
      defect: {
        dimensionName: "Defect",
        field: "defect",
        type: "list",
        typePosition: "row",
        numberPosition: 1,
        values: [
          "Cracks",
          "Blister",
          "Indvalsninger",
          "Grinding",
					"Beated"
        ]
      },
			company: {
        dimensionName: "Company",
        field: "company",
        type: "list",
        typePosition: "row",
        numberPosition: 2,
        values: [
          "Apple",
          "Google",
          "Microsoft",
          "Samsung",
					"Xiaomi"
        ]
      }
	  }
	}

	render() {
    let container = []
		for(var i = 0; i < this.state.defect.values.length; i++) {
			container.push(
				<tr>
					<td className="collapsed toggling">{this.state.defect.values[i]}</td>
					<td className="collapsed toggling">{this.state.company.values[i]}</td>
				</tr>
			)
		}
		return (
			<div className="cube-left-block">
				<table className="options-table">
					<tr rowspan="1">
						<th>{this.state.defect.dimensionName}</th>
						<th>{this.state.company.dimensionName}</th>
					</tr>
        {container}
				</table>
			</div>
		)
	}
}

export default Left
