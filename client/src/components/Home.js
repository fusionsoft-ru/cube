import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
	}

	async componentDidMount() {
		return fetch('/data/claims')
    .then((res) => res.json())
    .then((data) => alert(data.length))
    .catch((error) => console.error("error: " + error))
	}
	
  render() {
    return (
			<div className="Home">
				<h1> Добро пожаловать на Cube!</h1>
				<button color="warning" size="lg" onClick={this.setData}> Обновить </button>
				<table>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Larry</td>
						<td>the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</table>		
     </div>
    )
  }
}

export default Home
