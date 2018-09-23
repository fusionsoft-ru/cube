import React, { Component } from 'react'

class FactTable extends Component {
  render() {
    return (
      <div className="cube-right-block">
  			<table className="data-table-header">
  				<tr>
  					<th>Some other dimension value<a onclick="chooseDimension(this);"><i className="table-arrow arrow-down"></i></a></th>
  				</tr>
  			</table>
  			<div className="table-responsive">
  				<table className="data-table">
  					<tr>
  						<th className="collapsed toggling">2017<a><i className="table-arrow arrow-right"></i></a></th>
  						<th className="toggling">Quarter 1<a><i className="table-arrow arrow-down"></i></a></th>
  						<th className="collapsed toggling">Quarter 2<a><i className="table-arrow arrow-right"></i></a></th>
  						<th className="collapsed toggling">Month 1<a><i className="table-arrow arrow-right"></i></a></th>
  						<th className="collapsed toggling">Week 1<a><i className="table-arrow arrow-right"></i></a></th>
  						<th className="toggling">Month 2<a><i className="table-arrow arrow-down"></i></a></th>
  					</tr>
  					<tr>
  						<td>12345,512</td>
  						<td>5125,423</td>
  						<td>2152,235</td>
  						<td>234,255</td>
  						<td>123,521</td>
  						<td>323,521</td>
  					</tr>
  					<tr>
  						<td>22345,512</td>
  						<td>6125,423</td>
  						<td>3152,235</td>
  						<td>334,255</td>
  						<td>223,521</td>
  						<td>423,521</td>
  					</tr>
  					<tr>
  						<td>32345,512</td>
  						<td>7125,423</td>
  						<td>8152,235</td>
  						<td>434,255</td>
  						<td>323,521</td>
  						<td>523,521</td>
  					</tr>
  					<tr>
  						<td>42345,512</td>
  						<td>8125,423</td>
  						<td>5152,235</td>
  						<td>534,255</td>
  						<td>423,521</td>
  						<td>623,521</td>
  					</tr>
  					<tr>
  						<td>52345,512</td>
  						<td>9125,423</td>
  						<td>6152,235</td>
  						<td>634,255</td>
  						<td>223,521</td>
  						<td>123,521</td>
  					</tr>
  				</table>
  			</div>
  		</div>
    )
  }
}

export default FactTable
