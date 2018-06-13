import React from 'react';
import { browserHistory } from 'react-router';
import StatesController from 'store/controllers/StatesController';

import { FieldGroup } from 'components/forms/FieldGroup';
import FormValidate from 'components/forms/FormValidate';
import { Link } from 'react-router';
import NotificationSystem from 'react-notification-system';

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {          
            name: ''  
        };        
    }

    componentWillMount() {
        this.editMode = this.props.params.stateId || null
        if (this.editMode)
            this.edit();
    }

    edit() {
        StatesController.edit(this.props.params.stateId).then((state) => {
            this.state = state;
            this.setState(this.state);
        }), (error) => {
            this.notificationSystem.addNotification({
                message: 'Estado não encontado!',
                level: 'error'
            });
        };
    }

    create() {        
        StatesController.create(this.state).then(
            (state) => this.props.router.push('/states')
        ), (error) => {            
            this.notificationSystem.addNotification({
                message: 'Houve um problema ao criar o Estado!',
                level: 'error'
            });
        };
    }    

    update() {
        StatesController.update(this.state).then(
            (state) => this.props.router.push('/states')
        ), (error) => {            
            this.notificationSystem.addNotification({
                message: 'Houve um problema ao atualizar o Estado!',
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
                                <h1>{this.props.params.stateId ? "Atualizar" : "Adicionar"} Estado</h1>                        
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
                            <div className="col">	                    
                                <button type="submit" className='btn btn-success btn-md float-left'>
                                    {this.props.params.stateId ? "Atualizar" : "Adicionar"}                        
                                </button>
                                <Link className="btn btn-default btn-md float-right" to="/states">Cancelar</Link>                            
                            </div>    
                        </div>    
                    </div>                                
                </div>
            </FormValidate>
        );
    }
}