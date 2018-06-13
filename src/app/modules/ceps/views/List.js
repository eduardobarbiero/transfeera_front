import React from 'react';
import { Link } from 'react-router';
import CepsController from 'store/controllers/CepsController';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import NotificationSystem from 'react-notification-system';
import { DeleteNotification } from 'components/common/DeleteNotification';

class List extends React.Component {

    constructor(props) {
        super(props);        
    }

    exclude(cepId) {
        this.notificationSystem.addNotification({            
            level: 'warning',
            position: 'tc',
            children: (
                <div>
                    <DeleteNotification 
                        text={'Deseja realmente excluir o CEP?'} 
                        apply={
                            () => {
                                CepsController.delete(cepId).then(
                                    () => {
                                        this.notificationSystem.addNotification({
                                            message: 'CEP excluido com sucesso!',
                                            level: 'success'
                                        });
                                        this.props.getCeps();
                                    }), () => this.notificationSystem.addNotification({
                                        message: 'Não foi possível excluir o CEP!',
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
                    data={this.props.ceps} 
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
                        dataField="address"                                                                                                            
                    >
                        Endereço
                    </TableHeaderColumn>
                    <TableHeaderColumn 
                        dataField="number"                                                                                                            
                    >
                        Número
                    </TableHeaderColumn>    
                    <TableHeaderColumn 
                        dataField="complement"                                                                                                            
                    >
                        Compl.
                    </TableHeaderColumn>
                    <TableHeaderColumn 
                        dataField="district"                                                                                                            
                    >
                        Bairro
                    </TableHeaderColumn>
                    <TableHeaderColumn                        
                        dataFormat={(cell, row) => <div>{row.city ? row.city.name : ''}</div>}>
                        Cidade
                    </TableHeaderColumn>  
                    <TableHeaderColumn    
                        className={"pull-right"} 
                        width={"150"}                       
                        dataFormat={
                            (cell, row) => {
                                return (
                                    <div className="btn-group" role="group">
                                        <Link className="btn btn-warning ml-2" to={`/ceps/${row.id}/edit`}>Editar</Link>							                                                                    
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