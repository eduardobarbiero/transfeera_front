import React from 'react';
import { Router, Route, Link } from 'react-router';

export default class Index extends React.Component {

	constructor() {
		super();
		this.state = {			
		};
	}

	render() {
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="container text-center">
					<h1>Teste para desenvolvedor Transfeera!</h1>	
					<h3>Cadastros de Estados, Cidades e CEPs.</h3>
				</div>
			</div>			
		);
	};
}