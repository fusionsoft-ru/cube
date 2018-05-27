import React, {Component} from 'react';


class Menu extends Component {
	render() {
		return ( 
			<div className="cube-left-block">
				<table className="options-table">
					<tr rowspan="1">
						<th>Reason</th>
						<th>Client</th>
					</tr>
					<tr>
						<td className="toggling">All Types<a href="/" onclick="toggleCell(this);"><i className="table-arrow arrow-right"></i></a></td>
						<td className="toggling">All Clients<a href="/" onclick="toggleCell(this);"><i className="table-arrow arrow-right"></i></a></td>
					</tr>
					<tr>
						<td className="collapsed toggling">Cracks<a href="/" onclick="toggleCell(this);"><i className="table-arrow arrow-down"></i></a></td>
						<td className="collapsed toggling">All Clients<a href="/" onclick="toggleCell(this);"><i className="table-arrow arrow-down"></i></a></td>
					</tr>
					<tr>
						<td></td>
						<td>Jogersen and Usoft A/s</td>
					</tr>
					<tr>
						<td></td>
						<td>Volvo Construction Equipment Ab </td>
					</tr>
					<tr>
						<td className="toggling">Blister<a href="/" onclick="toggleCell(this);"><i className="table-arrow arrow-right"></i></a></td>
						<td className="toggling">All Clients<a href="/" onclick="toggleCell(this);"><i className="table-arrow arrow-right"></i></a></td>
					</tr>
				</table>
			</div>
		)
	}
}
 
export default Menu;
