import React, { Component } from 'react'


class Middle extends Component {
  constructor(props) {
    super(props)
		this.state = {
		  time: {
        title: "Time",
        type: "period",
				orientation: "horizontal",
        position: 1,
        siblings: [
          "quarter",
					"year",
          "month",
          "week"
        ],
      },
      year: {
        title: "Year",
        field: "year",
        type: "period",
        format: "QQ:YYYY",
        data: [
          "01:2017",
          "02:2017",
          "03:2017"
        ]
      },
      quarter: {
        title: "Quarter",
        field: "quarter",
        type: "period",
        format: "QQ:YYYY",
        data: [
          "01:2017",
          "02:2017",
          "03:2017"
        ]
      },
      month: {
        title: "Month",
        field: "month",
        type: "period",
        format: "M",
        data: [
          1,
          2,
          3
        ]
      },
      week: {
        title: "Week",
        field: "week",
        type: "period",
        format: "W",
        data: [
          1,
          2,
          3,
          4
        ]
      }
	  }
	}

	render() { 
		return ( 
			<div className="cube-right-block">
				<table className="data-table-header">
				  <tr>
				    <th>{this.state.time.title}</th>
				  </tr>
			  </table>
				<div className="table-responsive">
					<table className="data-table">
						<tr>
							<th className="collapsed toggling">2017<a href="/"><i className="table-arrow arrow-right"></i></a></th>
							<th className="toggling">Quarter 1<a href="/"><i className="table-arrow arrow-down"></i></a></th>
							<th className="collapsed toggling">Quarter 2<a href="/"><i className="table-arrow arrow-right"></i></a></th>
							<th className="collapsed toggling">Month 1<a href="/"><i className="table-arrow arrow-right"></i></a></th>
							<th className="collapsed toggling">Week 1<a href="/"><i className="table-arrow arrow-right"></i></a></th>
							<th className="toggling">Month 2<a href="/"><i className="table-arrow arrow-down"></i></a></th>
						</tr>
					</table>
				</div>
			</div>
		)
	}
}
 
export default Middle
