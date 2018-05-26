import React, { Component } from 'react';

class Content extends Component {
	state = {}
	render() { 
		return ( 
			<div class="cube-right-block">
				<table class="data-table-header">
					<tr>
						<th>Some other dimension value<a href="javascript:;" onclick="chooseDimension(this);"><i class="table-arrow arrow-down"></i></a></th>
					</tr>
				</table>
				<div class="table-responsive">
					<table class="data-table">
						<tr>
							<th class="collapsed toggling">2017<a href="javascript:;" onclick="toggleRow(this);"><i class="table-arrow arrow-right"></i></a></th>
							<th class="toggling">Quarter 1<a href="javascript:;" onclick="toggleRow(this);"><i class="table-arrow arrow-down"></i></a></th>
							<th class="collapsed toggling">Quarter 2<a href="javascript:;" onclick="toggleRow(this);"><i class="table-arrow arrow-right"></i></a></th>
							<th class="collapsed toggling">Month 1<a href="javascript:;" onclick="toggleCell(this);"><i class="table-arrow arrow-right"></i></a></th>
							<th class="collapsed toggling">Week 1<a href="javascript:;" onclick="toggleCell(this);"><i class="table-arrow arrow-right"></i></a></th>
							<th class="toggling">Month 2<a href="javascript:;" onclick="toggleCell(this);"><i class="table-arrow arrow-down"></i></a></th>
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
 
export default Content