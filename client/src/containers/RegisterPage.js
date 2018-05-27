import React, { Component } from 'react';

class RegisterPage extends Component {
	state = {}
	render() { 
		return (
			<div className="container">
				<div className="row">
					<div className="panel-title">
						<div className="text-center">
							<h1 className="title">Регистрация</h1>
						</div>
					</div>
					<div className="col-lg-8 col-lg-offset-2">
					<form action="/signup" method="POST">
						<div className="row control-group">
							<div className="form-group col-xs-12">
								<label>Логин</label>
								<input type="text" className="form-control" name="login"/>
							</div>
						</div>
						<div className="row control-group">
							<div className="form-group col-xs-12">
								<label>Электронна почта</label>
								<input type="text" className="form-control" name="email"/>
							</div>
						</div>
						<div className="row control-group">
							<div className="form-group col-xs-12">
								<label>Пароль</label>
								<input type="password" className="form-control" name="password"/>
							</div>
						</div>
						<div id="success"></div>
							<div className="row">
								<div className="form-group col-xs-12">
									<button type="submit" className="btn btn-primary btn-lg">Отправить</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
 
export default RegisterPage;