import React, { Component } from 'react'

class CubeHeader extends Component {
  render() {
    return (
      <div className="cube-header">
  			<div className="left-block">
  				<a className="btn btn-plus"></a>
  				<select id="choose-report" className="chosen chosen-wide">
  					<option value="1" selected>Saved Report #1</option>
  					<option value="2">Saved Report #2</option>
  					<option value="3">Saved Report #3</option>
  					<option value="4">Saved Report #4</option>
  				</select>
  				<a className="btn">Save</a>
  			</div>
  			<div className="right-block">
  				<span>Measure</span>
  				<select id="choose-measure" className="chosen">
  					<option value="ton" selected>Tonnage</option>
  					<option value="kilos">Kilogramms</option>
  				</select>
  				<div className="button-block">
  					<a><i className="cube-header-icon print"></i></a><a><i className="cube-header-icon help"></i></a><a data-toggle="modal" href="#settings"><i className="cube-header-icon settings"></i></a>
  				</div>
  			</div>
  		</div>
    )
  }
}

export default CubeHeader
