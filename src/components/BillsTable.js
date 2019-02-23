import React from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PropTypes from 'prop-types';

class BillsTable extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
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
                            <tr>
                            <td>1</td>
                            <td>Netflix</td>
                            <td>$12.00</td>
                            <td>03/12</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Groceries</td>
                            <td>$50.00</td>
                            <td>03/01</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Rent</td>
                            <td>$500.00</td>
                            <td>03/15</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
    }
}


BillsTable.propTypes = {
    
};

export default BillsTable
