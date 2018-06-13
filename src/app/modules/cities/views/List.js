import React from 'react';
import { Link } from 'react-router';
import CitiesController from 'store/controllers/CitiesController';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import NotificationSystem from 'react-notification-system';
import { DeleteNotification } from 'components/common/DeleteNotification';

class List extends React.Component {

    constructor(props) {
        super(props);        
    }

    exclude(cityId) {
        this.notificationSystem.addNotification({            
            level: 'warning',
            position: 'tc',
            children: (
                <div>
                    <DeleteNotification 
                        text={'Deseja realmente excluir a Cidade?'} 
                        apply={
                            () => {
                                CitiesController.delete(cityId).then(
                                    () => {
                                        this.notificationSystem.addNotification({
                                            message: 'Cidade excluida com sucesso!',
                                            level: 'success'
                                        });
                                        this.props.getCities();
                                    }), () => this.notificationSystem.addNotification({
                                        message: 'Não foi possível excluir a cidade!',
                                        level: 'error'
                                    });                                
                            } 
                        } 
                        reject={() => {}}
                    />
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                <NotificationSystem ref={(ref) => this.notificationSystem = ref} />
                <BootstrapTable 
                    data={this.props.cities} 
                    options={{
                        noDataText: 'Sem registros'
                    }} 
                    bordered={false}                                 
                    hover 
                    condensed>
                    <TableHeaderColumn 
                        dataField="id" 
                        isKey                         
                    >
                        Id
                    </TableHeaderColumn>            
                    <TableHeaderColumn 
                        dataField="name"                                                                                                            
                    >
                        Nome
                    </TableHeaderColumn>    
                    <TableHeaderColumn                        
                        dataFormat={(cell, row) => <div>{row.state ? row.state.name : ''}</div>}>
                        Estado
                    </TableHeaderColumn>  
                    <TableHeaderColumn    
                        className={"pull-right"} 
                        width={"150"}                       
                        dataFormat={
                            (cell, row) => {
                                return (
                                    <div className="btn-group" role="group">
                                        <Link className="btn btn-warning ml-2" to={`/cities/${row.id}/edit`}>Editar</Link>							                                                                    
                                        <button className="btn btn-danger ml-2" onClick={() => this.exclude(row.id)}>Excluir</button>							
                                    </div>      
                                )
                            }
                        }
                    >
                    Ações
                    </TableHeaderColumn>         
                </BootstrapTable>
            </div>
        );
    }
}

export default List;