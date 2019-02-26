import React from 'react';
import {connect} from 'react-redux';

//bootstrap 
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

//actions
import {addBill} from '../actions/userInputsAction'

class UserInputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            billCategory: '',
            billName: '',
            billAmount: null,
            billDueDate: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.addBill = this.addBill.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name)
    }

    addBill(){
        console.log("addbill")
        this.props.onAddBill(
            this.state.billCategory,
            this.state.billName,
            this.state.billAmount,
            this.state.billDueDate
        )
    }

    

    render() {
        return (
            <div className="mt-4">
                <Form className="mb-4">
                    <Row className="justify-content-center">
                        <Col md={{span: 2}}>
                            <Form.Control as="select" name="billCategory" onChange={this.handleChange}>
                                <option>Select One</option>
                                <option>Electricity</option>
                                <option>Entertainement</option>
                                <option>Rent</option>
                                <option>Water</option>
                            </Form.Control>
                        </Col>
                        <Col md={2}>
                            <Form.Control type="text" name="billName" onChange={this.handleChange} placeholder="Name For Bill" />
                        </Col>
                        <Col md={2}>
                            <Form.Control type="text" name="billAmount" onChange={this.handleChange} placeholder="Bill Amount" />
                        </Col>
                        <Col md={2}>
                            <Form.Control type="text" name="billDueDate" onChange={this.handleChange} placeholder="Due Date (ex: mm/dd)" pattern="\d{2}\/\d{2}" />
                        </Col>
                        <Col md={1}>
                            <Button onClick={this.addBill}>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        onAddBill: (data,data2,data3,data4) => dispatch(addBill(data,data2,data3,data4))
    }
    
}

UserInputs.propTypes = {
    
};

export default connect(null, mapDispatchToProps)(UserInputs)
