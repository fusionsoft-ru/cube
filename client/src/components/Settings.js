import React, { Component } from 'react'

class Settings extends Component {
	state = {}
	render() { 
		return (
			<div id="settings" className="modal fade" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<a href="#"><i className="cube-header-icon help"></i></a>
							<button type="button" className="close" data-dismiss="modal">&times;</button>
						</div>
						<div className="modal-body">
							<form action="/">
								<div className="table-responsive">
									<table className="settings-table" id="settings-table">
										<tr>
											<th></th>
											<th>Name</th>
											<th>Column</th>
											<th>Cube Role</th>
											<th>Cube Position</th>
											<th></th>
										</tr>
										<tr data-level="0">
											<td className="arrow-column">
												<a href="javascript:;" data-active="disabled" onclick="changeDepth('left', this);"><i className="arrow-left disabled"></i></a>
												<a href="javascript:;" onclick="changeDepth('right', this);"><i className="arrow-right"></i></a>
											</td>
											<td>
												<input id="name-1" type="text" value="Category"/>
											</td>
											<td>
												<input id="column-1" type="text" value="1"/><i className="warning-icon" data-placement="right" data-toggle="tooltip" title="Column already exists!"></i>
											</td>
											<td>
												<select id="role-1">
													<option selected value="dimension">Dimension</option>
													<option value="measure">Measure</option>
													<option value="ignore">Ignore</option>
												</select>
											</td>
											<td>
												<select id="position-1">
													<option selected value="dimension">Left</option>
													<option value="dimension">Up</option>
													<option value="dimension">None</option>
												</select>
											</td>
											<td>
												<div className="arrow-up-down-block">
													<a href="javascript:;" onclick="moveRow('up', this);"><i className="arrow-up"></i></a>
													<a href="javascript:;" onclick="moveRow('down', this);"><i className="arrow-down"></i></a>
												</div>
												<a href="javascript:;" onclick="removeLine(this)"><i className="remove">&times;</i></a>
											</td>
										</tr>
										<tr data-level="1">
											<td className="arrow-column">
												<a href="javascript:;" data-active="disabled" onclick="changeDepth('left', this);"><i className="arrow-left disabled"></i></a>
												<a href="javascript:;" onclick="changeDepth('right', this);"><i className="arrow-right"></i></a>
											</td>
											<td>
												<i className="arrow-right"></i><input id="name-2" type="text" value="Cracks"/>
											</td>
											<td>
												<input id="column-2" type="text" value="2"/>
											</td>
											<td>
											</td>
											<td>
											</td>
											<td>
												<div className="arrow-up-down-block">
													<a href="javascript:;" onclick="moveRow('up', this);"><i className="arrow-up"></i></a>
													<a href="javascript:;" onclick="moveRow('down', this);"><i className="arrow-down"></i></a>
												</div>
												<a href="javascript:;" onclick="removeLine(this);"><i className="remove">&times;</i></a>
											</td>
										</tr>
										<tr data-level="0">
											<td className="arrow-column">
												<a href="javascript:;" data-active="disabled" onclick="changeDepth('left', this);"><i className="arrow-left disabled"></i></a>
												<a href="javascript:;" onclick="changeDepth('right', this);"><i className="arrow-right"></i></a>
											</td>
											<td>
												<input id="name-3" type="text" value="Country"/>
											</td>
											<td>
												<input id="column-3" type="text" value="3"/>
											</td>
											<td>
												<select id="role-3">
													<option selected value="dimension">Dimension</option>
													<option value="measure">Measure</option>
													<option value="ignore">Ignore</option>
												</select>
											</td>
											<td>
												<select id="position-3">
													<option selected value="dimension">Left</option>
													<option value="dimension">Up</option>
													<option value="dimension">None</option>
												</select>
											</td>
											<td>
												<div className="arrow-up-down-block">
													<a href="javascript:;" onclick="moveRow('up', this);"><i className="arrow-up"></i></a>
													<a href="javascript:;" onclick="moveRow('down', this);"><i className="arrow-down"></i></a>
												</div>
												<a href="javascript:;" onclick="removeLine(this);"><i className="remove">&times;</i></a>
											</td>
										</tr>
										<tr data-level="1">
											<td className="arrow-column">
												<a href="javascript:;" data-active="disabled" onclick="changeDepth('left', this);"><i className="arrow-left disabled"></i></a>
												<a href="javascript:;" onclick="changeDepth('right', this);"><i className="arrow-right"></i></a>
											</td>
											<td>
												<i className="arrow-right"></i><input id="name-4" type="text" value="Customer"/>
											</td>
											<td>
												<input id="column-4" type="text" value="8"/>
											</td>
											<td>
											</td>
											<td>
											</td>
											<td>
												<div className="arrow-up-down-block">
													<a href="javascript:;" onclick="moveRow('up', this);"><i className="arrow-up"></i></a>
													<a href="javascript:;" onclick="moveRow('down', this);"><i className="arrow-down"></i></a>
												</div>
												<a href="javascript:;" onclick="removeLine(this);"><i className="remove">&times;</i></a>
											</td>
										</tr>
										<tr data-level="0">
											<td className="arrow-column">
												<a href="javascript:;" data-active="disabled" onclick="changeDepth('left', this);"><i className="arrow-left disabled"></i></a>
												<a href="javascript:;" onclick="changeDepth('right', this);"><i className="arrow-right"></i></a>
											</td>
											<td>
												<input id="name-6" type="text" value="Some other dimension"/>
											</td>
											<td>
												<input id="column-6" type="text" value="1"/><i className="warning-icon" data-placement="right" data-toggle="tooltip" title="Column already exists!"></i>
											</td>
											<td>
												<select id="role-6">
													<option selected value="dimension">Dimension</option>
													<option value="measure">Measure</option>
													<option value="ignore">Ignore</option>
												</select>
											</td>
											<td>
												<select id="position-6">
													<option value="dimension">Left</option>
													<option selected value="dimension">Up</option>
													<option value="none">None</option>
												</select>
											</td>
											<td>
												<div className="arrow-up-down-block">
													<a href="javascript:;" onclick="moveRow('up', this);"><i className="arrow-up"></i></a>
													<a href="javascript:;" onclick="moveRow('down', this);"><i className="arrow-down"></i></a>
												</div>
												<a href="javascript:;" onclick="removeLine(this);"><i className="remove">&times;</i></a>
											</td>
										</tr>
										<tr data-level="1">
											<td className="arrow-column">
												<a href="javascript:;" onclick="changeDepth('left', this);"><i className="arrow-left"></i></a>
												<a href="javascript:;" onclick="changeDepth('right', this);"><i className="arrow-right"></i></a>
											</td>
											<td>
												<i className="arrow-right"></i><input id="name-7" type="text" value="Quarter"/>
											</td>
											<td>
												<input id="column-7" type="text" value="5"/>
											</td>
											<td>
											</td>
											<td>
											</td>
											<td>
												<div className="arrow-up-down-block">
													<a href="javascript:;" onclick="moveRow('up', this);"><i className="arrow-up"></i></a>
													<a href="javascript:;" onclick="moveRow('down', this);"><i className="arrow-down"></i></a>
												</div>
												<a href="javascript:;" onclick="removeLine(this);"><i className="remove">&times;</i></a>
											</td>
										</tr>
										<tr data-level="2">
											<td className="arrow-column">
												<a href="javascript:;" onclick="changeDepth('left', this);"><i className="arrow-left"></i></a>
												<a href="javascript:;" onclick="changeDepth('right', this);"><i className="arrow-right"></i></a>
											</td>
											<td>
												<i className="arrow-right"></i><input id="name-8" type="text" value="Month"/>
											</td>
											<td>
												<input id="column-8" type="text" value="6"/>
											</td>
											<td>
											</td>
											<td>
											</td>
											<td>
												<div className="arrow-up-down-block">
													<a href="javascript:;" onclick="moveRow('up', this);"><i className="arrow-up"></i></a>
													<a href="javascript:;" onclick="moveRow('down', this);"><i className="arrow-down"></i></a>
												</div>
												<a href="javascript:;" onclick="removeLine(this);"><i className="remove">&times;</i></a>
											</td>
										</tr>
										<tr data-level="3">
											<td className="arrow-column">
												<a href="javascript:;" onclick="changeDepth('left', this);"><i className="arrow-left"></i></a>
												<a href="javascript:;" onclick="changeDepth('right', this);"><i className="arrow-right"></i></a>
											</td>
											<td>
												<i className="arrow-right"></i><input id="name-9" type="text" value="Day"/>
											</td>
											<td>
												<input id="column-9" type="text" value="7"/>
											</td>
											<td>
											</td>
											<td>
											</td>
											<td>
												<div className="arrow-up-down-block">
													<a href="javascript:;" onclick="moveRow('up', this);"><i className="arrow-up"></i></a>
													<a href="javascript:;" onclick="moveRow('down', this);"><i className="arrow-down"></i></a>
												</div>
												<a href="javascript:;" onclick="removeLine(this);"><i className="remove">&times;</i></a>
											</td>
										</tr>
										<tr data-level="0">
											<td className="arrow-column">
												<a href="javascript:;" data-active="disabled" onclick="changeDepth('left', this);"><i className="arrow-left disabled"></i></a>
												<a href="javascript:;" onclick="changeDepth('right', this);"><i className="arrow-right"></i></a>
											</td>
											<td>
												<input id="name-10" type="text" value="Week"/>
											</td>
											<td>
												<input id="column-10" type="text" value="9"/>
											</td>
											<td>
												<select id="role-10">
													<option selected value="dimension">Dimension</option>
													<option value="measure">Measure</option>
													<option value="ignore">Ignore</option>
												</select>
											</td>
											<td>
												<select id="position-10">
													<option value="dimension">Left</option>
													<option value="dimension">Up</option>
													<option selected value="none">None</option>
												</select>
											</td>
											<td>
												<div className="arrow-up-down-block">
													<a href="javascript:;" onclick="moveRow('up', this);"><i className="arrow-up"></i></a>
													<a href="javascript:;" onclick="moveRow('down', this);"><i className="arrow-down"></i></a>
												</div>
												<a href="javascript:;" onclick="removeLine(this);"><i className="remove">&times;</i></a>
											</td>
										</tr>
										<tr data-level="1">
											<td className="arrow-column">
												<a href="javascript:;" onclick="changeDepth('left', this);"><i className="arrow-left"></i></a>
												<a href="javascript:;" onclick="changeDepth('right', this);"><i className="arrow-right"></i></a>
											</td>
											<td>
												<i className="arrow-right"></i><input id="name-11" type="text" value="Day"/>
											</td>
											<td>
												<input id="column-11" type="text" value="10"/>
											</td>
											<td>
											</td>
											<td>
											</td>
											<td>
												<div className="arrow-up-down-block">
													<a href="javascript:;" onclick="moveRow('up', this);"><i className="arrow-up"></i></a>
													<a href="javascript:;" onclick="moveRow('down', this);"><i className="arrow-down"></i></a>
												</div>
												<a href="javascript:;" onclick="removeLine(this);"><i className="remove">&times;</i></a>
											</td>
										</tr>
										<tr data-level="0">
											<td className="arrow-column">
												<a href="javascript:;" data-active="disabled" onclick="changeDepth('left', this);"><i className="arrow-left disabled"></i></a>
												<a href="javascript:;" onclick="changeDepth('right', this);"><i className="arrow-right"></i></a>
											</td>
											<td>
												<input id="name-12" type="text" value="Tonnage"/>
											</td>
											<td>
												<input id="column-12" type="text" value="9"/>
											</td>
											<td>
												<select id="role-12">
													<option value="dimension">Dimension</option>
													<option selected value="measure">Measure</option>
													<option value="ignore">Ignore</option>
												</select>
											</td>
											<td>
												<select id="position-12" data-active="disabled">
													<option value="dimension">Left</option>
													<option value="dimension">Up</option>
													<option selected value="none">None</option>
												</select>
											</td>
											<td>
												<div className="arrow-up-down-block">
													<a href="javascript:;" onclick="moveRow('up', this);"><i className="arrow-up"></i></a>
													<a href="javascript:;" onclick="moveRow('down', this);"><i className="arrow-down"></i></a>
												</div>
												<a href="javascript:;" onclick="removeLine(this);"><i className="remove">&times;</i></a>
											</td>
										</tr>
										<tr data-level="0">
											<td className="arrow-column">
												<a href="javascript:;" data-active="disabled" onclick="changeDepth('left', this);"><i className="arrow-left disabled"></i></a>
												<a href="javascript:;" onclick="changeDepth('right', this);"><i className="arrow-right"></i></a>
											</td>
											<td>
												<input id="name-13" type="text" value="Quantity"/>
											</td>
											<td>
												<input id="column-13" type="text" value="12"/>
											</td>
											<td>
												<select id="role-13">
													<option value="dimension">Dimension</option>
													<option selected value="measure">Measure</option>
													<option value="ignore">Ignore</option>
												</select>
											</td>
											<td>
												<select id="position-13" data-active="disabled">
													<option value="dimension">Left</option>
													<option value="dimension">Up</option>
													<option selected value="none">None</option>
												</select>
											</td>
											<td>
												<div className="arrow-up-down-block">
													<a href="javascript:;" onclick="moveRow('up', this);"><i className="arrow-up"></i></a>
													<a href="javascript:;" onclick="moveRow('down', this);"><i className="arrow-down"></i></a>
												</div>
												<a href="javascript:;" onclick="removeLine(this);"><i className="remove">&times;</i></a>
											</td>
										</tr>
										<tr data-level="0">
											<td className="arrow-column">
												<a href="javascript:;" data-active="disabled" onclick="changeDepth('left', this);"><i className="arrow-left disabled"></i></a>
												<a href="javascript:;" onclick="changeDepth('right', this);"><i className="arrow-right"></i></a>
											</td>
											<td>
												<input id="name-14" type="text" value="Column12"/>
											</td>
											<td>
												<input id="column-14" type="text" value="13"/>
											</td>
											<td>
												<select id="role-14">
													<option value="dimension">Dimension</option>
													<option selected value="measure">Measure</option>
													<option value="ignore">Ignore</option>
												</select>
											</td>
											<td>
												<select id="position-14" data-active="disabled">
													<option value="dimension">Left</option>
													<option value="dimension">Up</option>
													<option selected value="none">None</option>
												</select>
											</td>
											<td>
												<div className="arrow-up-down-block">
													<a href="javascript:;" onclick="moveRow('up', this);"><i className="arrow-up"></i></a>
													<a href="javascript:;" onclick="moveRow('down', this);"><i className="arrow-down"></i></a>
												</div>
												<a href="javascript:;" onclick="removeLine(this);"><i className="remove">&times;</i></a>
											</td>
										</tr>
									</table>
								</div>
								<a href="javascript:;" onclick="addSettingsRow();" className="btn btn-plus btn-plus-text">Add Column</a>
							</form>
							<div className="upload-file-block">
								<form action="/">
									<input type="file" id="upload-file-input"/>
									<input type="text" value="Upload file.." className="upload-file-text-box"/>
									<a href="javascript:;" onclick="settingsUploadFile(this)"><i className="cloud-icon"></i></a>
									<div className="upload-file-block-footer">
										<input type="checkbox" id="getNamesFromFirstRow" name="getNamesFromFirstRow" checked="checked"/>
										<label for="getNamesFromFirstRow">Get names from the first row</label>

										<input type="checkbox" name="addNewColumns" id="addNewColumns"/>
										<label for="addNewColumns">Add new columns</label>
									</div>
								</form>
							</div>
						</div>
						<div className="modal-footer">
							<input type="submit" className="btn btn-primary" data-dismiss="modal" value="Save"/>
							<a href="javascript:;" data-dismiss="modal" className="btn">Cancel</a>
						</div>
					</div>

				</div>
			</div>
		)
	}
}
 
export default Settings
