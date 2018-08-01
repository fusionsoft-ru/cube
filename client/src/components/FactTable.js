import React, { Component } from 'react'


class FactTable extends Component {
  constructor(props) {
    super(props)
		this.state = {}
  }

	render() {
    return (
  			<div className="cube-right-block">
  				<table className="data-table-header">
  				  <tr>
  				    <th>Time</th>
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

export default FactTable
