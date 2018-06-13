import React from 'react';
import { Link } from 'react-router';
import StatesController from 'store/controllers/StatesController';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import NotificationSystem from 'react-notification-system';
import { DeleteNotification } from 'components/common/DeleteNotification';

class List extends React.Component {

    constructor(props) {
        super(props);        
    }

    exclude(stateId) {
        this.notificationSystem.addNotification({            
            level: 'warning',
            position: 'tc',
            children: (
                <div>
                    <DeleteNotification 
                        text={'Deseja realmente excluir o Estado?'} 
                        apply={
                            () => {
                                StatesController.delete(stateId).then(
                                    () => {
                                        this.notificationSystem.addNotification({
                                            message: 'Estado excluido com sucesso!',
                                            level: 'success'
                                        });
                                        this.props.getStates();
                                    }), () => this.notificationSystem.addNotification({
                                        message: 'Não foi possível excluir o estado!',
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
                    data={this.props.states} 
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
                        filter={{ placeholder: "Filtrar pelo nome", type: 'TextFilter', delay: 0 }}
                        columnTitle
                    >
                        Nome
                    </TableHeaderColumn>      
                    <TableHeaderColumn    
                        className={"pull-right"}
                        width={"148"}
                        dataFormat={
                            (cell, row) => {
                                return (
                                    <div className="btn-group" role="group">
                                        <Link className="btn btn-warning ml-2" to={`/states/${row.id}/edit`}>Editar</Link>							                                                                    
                                        <button className="btn btn-danger ml-2" onClick={() => this.exclude(row.id)}>Excluir</button>							
                                    </div>      
                                )
                            }
                        }
                    >
                    </TableHeaderColumn>         
                </BootstrapTable>
            </div>
        );
    }
}

export default List;