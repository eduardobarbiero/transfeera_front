import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import CitiesController from 'store/controllers/CitiesController';
import StatesController from 'store/controllers/StatesController';
import { statesData } from 'store/actions/stateAction';
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
            name: '',
            stateId: undefined
        };        
    }

    componentWillMount() {
        this.editMode = this.props.params.cityId || null;
        this.getStates();

        if (this.editMode)
            this.edit();
    }
    
    getStates() {
		StatesController.index().then(states => {
            store.dispatch(statesData(states));            
        });
	}	

    edit() {
        CitiesController.edit(this.props.params.cityId).then((city) => {
            this.state = city;
            this.setState(this.state);
        }), (error) => {
            this.notificationSystem.addNotification({
                message: 'Cidade não encontada!',
                level: 'error'
            });
        };
    }

    create() {        
        CitiesController.create(this.state).then(
            (state) => this.props.router.push('/cities')
        ), (error) => {            
            this.notificationSystem.addNotification({
                message: 'Houve um problema ao criar a Cidade!',
                level: 'error'
            });
        };
    }    

    update() {
        CitiesController.update(this.state).then(
            (state) => this.props.router.push('/cities')
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
                <div className="row mt-3">				
                    <div className="col">
                        <div className="row mt-3">
                            <div className="col">
                                <h1>{this.editMode ? "Atualizar" : "Adicionar"} Cidade</h1>                        
                            </div>
                        </div>                                   
                        <div className="row mt-3">
                            <div className="col">	
                                <FieldGroup
                                    id="name"
                                    type="text"
                                    label="Nome"
                                    placeholder="Digite um nome" 
                                    value={this.state.name}  
                                    onChange={(event) => {                                        
                                        this.state.name = event.target.value;
                                        this.setState(this.state);
                                    }}
                                    required={true}
                                />
                            </div>
                        </div> 

                        <div className="row mt-3">
                            <div className="col-6">	
                                <SelectGroup
                                    id="state"                                    
                                    label="Estado"
                                    placeholder="Escolha um estado" 
                                    componentClass="select"
                                    value={this.state.stateId ? this.state.stateId : undefined}  
                                    options={this.props.states}
                                    onChange={(event) => {                                        
                                        this.state.stateId = event.target.value;
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
                                <Link className="btn btn-default btn-md float-right" to="/cities">Cancelar</Link>                            
                            </div>    
                        </div>    
                    </div>                                
                </div>
            </FormValidate>
        );
    }
}


const mapStateToProps = state => {	
    return { states: state.states.states }
}

export default connect(mapStateToProps)(Form)