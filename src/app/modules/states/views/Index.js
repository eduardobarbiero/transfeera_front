import React from 'react';
import { connect } from 'react-redux';
import { config } from 'config/config';
import { Link } from 'react-router';

import List from './List';
import StatesController from 'store/controllers/StatesController';
import { statesData } from 'store/actions/stateAction';
import store from 'store/configureStore';

class Index extends React.Component {

	constructor() {
		super();
		this.state = {			
		};
	}

	componentWillMount() {
		this.getStates();
	}

	getStates() {
		StatesController.index().then(states => {
            store.dispatch(statesData(states));            
        });
	}	

	render() {
		return (
			<div>
				<div className="row mt-3">				
				<div className="col">
						<div className="row mt-3">
							<div className="col">
								<h1>Estados</h1>                        
							</div>
						</div>

						<div className="row mt-3">
							<div className="col">  
							    <Link className="btn btn-primary" to="/states/new">Novo</Link>							
							</div>
						</div>	
						<div className="row mt-3">
							<div className="col">				
								<List states={this.props.states} getStates={() => this.getStates()} />
							</div>
						</div>						
					</div>						
				</div>					
			</div>	
		)
	};
}

const mapStateToProps = state => {	
    return { states: state.states.states }
}

export default connect(mapStateToProps)(Index)