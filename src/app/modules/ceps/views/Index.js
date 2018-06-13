import React from 'react';
import { connect } from 'react-redux';
import { config } from 'config/config';
import { Link } from 'react-router';

import List from './List';
import CepsController from 'store/controllers/CepsController';
import { cepsData } from 'store/actions/cepAction';
import store from 'store/configureStore';

class Index extends React.Component {

	constructor() {
		super();
		this.state = {			
		};
	}

	componentWillMount() {
		this.getCeps();
	}

	getCeps() {
		CepsController.index().then(ceps => {
            store.dispatch(cepsData(ceps));            
        });
	}	

	render() {
		return (
			<div>
				<div className="row mt-3">				
				<div className="col">
						<div className="row mt-3">
							<div className="col">
								<h1>CEPs</h1>                        
							</div>
						</div>

						<div className="row mt-3">
							<div className="col">  
							    <Link className="btn btn-primary" to="/ceps/new">Novo</Link>							
							</div>
						</div>	
						<div className="row mt-3">
							<div className="col">				
								<List ceps={this.props.ceps} getCeps={() => this.getCeps()} />
							</div>
						</div>						
					</div>						
				</div>					
			</div>	
		)
	};
}

const mapStateToProps = state => {	
    return { ceps: state.ceps.ceps }
}

export default connect(mapStateToProps)(Index)