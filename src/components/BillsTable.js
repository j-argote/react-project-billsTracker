import React from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PropTypes from 'prop-types';

import {connect} from 'react-redux'
import {deleteBill, addBill} from '../actions/userInputsAction'

class BillsTable extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const tableRow = this.props.billsList.map((billData,index)=>{
            var index = index + 1 
            return(
                <tr key={index}>
                    <td>{index}</td>
                    <td>{billData.billName}</td>
                    <td>${billData.billAmount}</td>
                    <td>{billData.billDueDate}</td>
                    <td><button onClick={this.props.deleteBill}>Delete</button></td>
                </tr>
            )
        })
        return (
            <div>
            <Row>
                <Col md={{span: 10, offset: 1}} >
                    <Table size="sm" striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Due Date</th>
                            <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRow}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            </div>
        );
    }
}

function mapStateToProps(state){
    // console.log(state.userInputsReducer.billsList)
    return {
        billsList: state.userInputsReducer.billsList
    }
}

function mapDispatchToProps(dispatch){
    return{
        onDeleteBill: (billData) => dispatch(deleteBill(billData))
    }
}


BillsTable.propTypes = {
    
};

export default connect(mapStateToProps,mapDispatchToProps)(BillsTable)


