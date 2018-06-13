import React from 'react';
import { connect } from 'react-redux';
import { config } from 'config/config';
import { Link } from 'react-router';

import List from './List';
import CitiesController from 'store/controllers/CitiesController';
import { citiesData } from 'store/actions/cityAction';
import store from 'store/configureStore';

class Index extends React.Component {

	constructor() {
		super();
		this.state = {			
		};
	}

	componentWillMount() {
		this.getCities();
	}

	getCities() {
		CitiesController.index().then(cities => {
            store.dispatch(citiesData(cities));            
        });
	}	

	render() {
		return (
			<div>
				<div className="row mt-3">				
				<div className="col">
						<div className="row mt-3">
							<div className="col">
								<h1>Cidades</h1>                        
							</div>
						</div>

						<div className="row mt-3">
							<div className="col">  
							    <Link className="btn btn-primary" to="/cities/new">Novo</Link>							
							</div>
						</div>	
						<div className="row mt-3">
							<div className="col">				
								<List cities={this.props.cities} getCities={() => this.getCities()} />
							</div>
						</div>						
					</div>						
				</div>					
			</div>	
		)
	};
}

const mapStateToProps = state => {	
    return { cities: state.cities.cities }
}

export default connect(mapStateToProps)(Index)