import React from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PropTypes from 'prop-types';

import {connect} from 'react-redux'

class BillsTable extends React.Component {
    constructor(props) {
        super(props);
        
    }

    

    render() {
        const tableRow = this.props.bill.map((bill,index)=>{
            var index = index + 1 
            return(
                <tr>
                    <td key={index}>{index}</td>
                    <td key={index}>{bill.billName}</td>
                    <td key={index}>${bill.billAmount}</td>
                    <td key={index}>{bill.billDueDate}</td>
                </tr>
            )
        })
        return (
            <Row>
                <Col md={{span: 10, offset: 1}} >
                    <Table size="sm" striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRow}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
    }
}

function mapStateToProps(state){
    console.log(state.userInputsReducer.billsList)
    return {
        bill: state.userInputsReducer.billsList
    }
}


BillsTable.propTypes = {
    
};

export default connect(mapStateToProps,null)(BillsTable)


