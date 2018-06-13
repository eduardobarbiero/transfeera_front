import React from 'react';
import { connect } from 'react-redux';
import { HeaderNav } from './HeaderNav';

export default class layout extends React.Component {

	constructor() {
		super();
		this.state = {
		};
	}

	render() {
		return (
			<div>										
				<HeaderNav />
				<div className="container text-muted">
					<div id="main" role="main">
						{this.props.children}	
					</div>
				</div>						
			</div>
		)
	}
}