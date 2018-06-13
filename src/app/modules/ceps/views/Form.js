import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import CepsController from 'store/controllers/CepsController';
import CitiesController from 'store/controllers/CitiesController';
import { citiesData } from 'store/actions/cityAction';
import store from 'store/configureStore';

import { FieldGroup } from 'components/forms/FieldGroup';
import { SelectGroup } from 'components/forms/SelectGroup';
import FormValidate from 'components/forms/FormValidate';
import { Link } from 'react-router';
import NotificationSystem from 'react-notification-system';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {          
            address: '',
            number: '',
            complement: '',
            district: '',
            cityId: undefined
        };        
    }

    componentWillMount() {
        this.editMode = this.props.params.cepId || null;
        this.getCities();

        if (this.editMode)
            this.edit();
    }
    
    getCities() {
		CitiesController.index().then(cities => {
            store.dispatch(citiesData(cities));            
        });
	}	

    edit() {
        CepsController.edit(this.props.params.cepId).then((cep) => {
            this.state = cep;
            this.setState(this.state);
        }), (error) => {
            this.notificationSystem.addNotification({
                message: 'Cep não encontado!',
                level: 'error'
            });
        };
    }

    create() {        
        CepsController.create(this.state).then(
            (state) => this.props.router.push('/ceps')
        ), (error) => {            
            this.notificationSystem.addNotification({
                message: 'Houve um problema ao criar a Cidade!',
                level: 'error'
            });
        };
    }    

    update() {
        CepsController.update(this.state).then(
            (state) => this.props.router.push('/ceps')
        ), (error) => {            
            this.notificationSystem.addNotification({
                message: 'Houve um problema ao atualizar a Cidade!',
                level: 'error'
            });
        };
    }    

    render() {                
        return (
            <FormValidate
            submit={() => {
                if (this.editMode)
                    this.update();
                else
                    this.create();
            }}
            >
                <NotificationSystem ref={(ref) => this.notificationSystem = ref} />
                <div className="row">				
                    <div className="col">
                        <div className="row mt-3">
                            <div className="col">
                                <h1>{this.editMode ? "Atualizar" : "Adicionar"} CEP</h1>                        
                            </div>
                        </div>                                   
                        <div className="row">
                            <div className="col-8">	
                                <FieldGroup
                                    id="address"
                                    type="text"
                                    label="Rua"
                                    placeholder="Digite uma rua" 
                                    value={this.state.address}  
                                    onChange={(event) => {                                        
                                        this.state.address = event.target.value;
                                        this.setState(this.state);
                                    }}
                                    required={true}
                                />
                            </div>
                            <div className="col-4">	
                                <FieldGroup
                                    id="number"
                                    type="text"
                                    label="Número"
                                    placeholder="Digite um número" 
                                    value={this.state.number}  
                                    onChange={(event) => {                                        
                                        this.state.number = event.target.value;
                                        this.setState(this.state);
                                    }}
                                    required={true}
                                />
                            </div>                            
                        </div> 
                        
                        <div className="row">
                            <div className="col-6">	
                                <FieldGroup
                                    id="complement"
                                    type="text"
                                    label="Complemento"
                                    placeholder="ex: Casa, apto..." 
                                    value={this.state.complement}  
                                    onChange={(event) => {                                        
                                        this.state.complement = event.target.value;
                                        this.setState(this.state);
                                    }}
                                />
                            </div>                                                        
                            <div className="col-6">	
                                <FieldGroup
                                    id="district"
                                    type="text"
                                    label="Bairro"
                                    placeholder="Digite um bairro" 
                                    value={this.state.district}  
                                    onChange={(event) => {                                        
                                        this.state.district = event.target.value;
                                        this.setState(this.state);
                                    }}
                                    required={true}
                                />
                            </div> 
                        </div>                         
                        <div className="row">
                            <div className="col-6">	
                                <SelectGroup
                                    id="city"                                    
                                    label="Cidade"
                                    placeholder="Escolha uma cidade" 
                                    componentClass="select"
                                    value={this.state.cityId ? this.state.cityId : undefined}  
                                    options={this.props.cities}
                                    onChange={(event) => {                                        
                                        this.state.cityId = event.target.value;
                                        this.setState(this.state);
                                    }}
                                    required={true}
                                />
                            </div>
                        </div>                                
                        <div className="row mt-3">
                            <div className="col">	                    
                                <button type="submit" className='btn btn-success btn-md float-left'>
                                    {this.editMode ? "Atualizar" : "Adicionar"}                        
                                </button>
                                <Link className="btn btn-default btn-md float-right" to="/ceps">Cancelar</Link>                            
                            </div>    
                        </div>    
                    </div>                                
                </div>
            </FormValidate>
        );
    }
}


const mapStateToProps = state => {	
    return { cities: state.cities.cities }
}

export default connect(mapStateToProps)(Form)