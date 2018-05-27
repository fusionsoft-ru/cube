import React, { Component } from 'react';

class UsersList extends Component {
	state = {}
	render() { 
		return (
			<div className="container bootstrap snippet">
				<div className="row">
						<div className="col-lg-12">
								<div className="main-box no-header clearfix">
										<div className="main-box-body clearfix">
												<div className="table-responsive">
														<table className="table user-list">
																<thead>
																		<tr>
																		<th><span>User</span></th>
																		<th><span>Created</span></th>
																		<th><span>Email</span></th>
																		<th>&nbsp;</th>
																		</tr>
																</thead>
																<tbody>
																		<tr>
																				<td>
																						<img src="https://bootdey.com/img/Content/user_1.jpg" alt=""/>
																						<a href="#" className="user-link">Full name 1</a>
																						<span className="user-subhead">Member</span>
																				</td>
																				<td>2013/08/12</td>
																				<td>
																						<a href="#">marlon@brando.com</a>
																				</td>
																				<td>
																						<a href="#" className="table-link">
																								<span className="fa-stack">
																										<i className="fa fa-square fa-stack-2x"></i>
																										<i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
																								</span>
																						</a>
																						<a href="#" className="table-link">
																								<span className="fa-stack">
																										<i className="fa fa-square fa-stack-2x"></i>
																										<i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
																								</span>
																						</a>
																						<a href="#" className="table-link danger">
																								<span className="fa-stack">
																										<i className="fa fa-square fa-stack-2x"></i>
																										<i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
																								</span>
																						</a>
																				</td>
																		</tr>
																		<tr>
																				<td>
																						<img src="https://bootdey.com/img/Content/user_3.jpg" alt=""/>
																						<a href="#" className="user-link">Full name 2</a>
																						<span className="user-subhead">Admin</span>
																				</td>
																				<td>2013/08/12</td>
																				<td>
																						<a href="#">marlon@brando.com</a>
																				</td>
																				<td>
																						<a href="#" className="table-link">
																								<span className="fa-stack">
																										<i className="fa fa-square fa-stack-2x"></i>
																										<i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
																								</span>
																						</a>
																						<a href="#" className="table-link">
																								<span className="fa-stack">
																										<i className="fa fa-square fa-stack-2x"></i>
																										<i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
																								</span>
																						</a>
																						<a href="#" className="table-link danger">
																								<span className="fa-stack">
																										<i className="fa fa-square fa-stack-2x"></i>
																										<i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
																								</span>
																						</a>
																				</td>
																		</tr>
																		<tr>
																				<td>
																						<img src="https://bootdey.com/img/Content/user_2.jpg" alt=""/>
																						<a href="#" className="user-link">Full name 3</a>
																						<span className="user-subhead">Member</span>
																				</td>
																				<td>2013/08/12</td>
																				<td>
																						<a href="#">marlon@brando.com</a>
																				</td>
																				<td>
																						<a href="#" className="table-link">
																								<span className="fa-stack">
																										<i className="fa fa-square fa-stack-2x"></i>
																										<i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
																								</span>
																						</a>
																						<a href="#" className="table-link">
																								<span className="fa-stack">
																										<i className="fa fa-square fa-stack-2x"></i>
																										<i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
																								</span>
																						</a>
																						<a href="#" className="table-link danger">
																								<span className="fa-stack">
																										<i className="fa fa-square fa-stack-2x"></i>
																										<i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
																								</span>
																						</a>
																				</td>
																		</tr>
																</tbody>
														</table>
												</div>
										</div>
								</div>
						</div>
				</div>
		</div>
		)
	}
}
 
export default UsersList;