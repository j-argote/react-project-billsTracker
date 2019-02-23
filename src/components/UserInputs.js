import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class UserInputs extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="mt-4">
                <Form>
                    <Row>
                        <Col md={{span: 2, offset: 3}}>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select">
                                    <option>Select One</option>
                                    <option>Electricity</option>
                                    <option>Entertainement</option>
                                    <option>Rent</option>
                                    <option>Water</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Control placeholder="Name For Bill" />
                        </Col>
                        <Col md={2}>
                            <Form.Control placeholder="Due Date (ex: mm/dd)" />
                        </Col>
                        <Col>
                            <Button>Submit</Button>
                        </Col>
                    </Row>
                </Form>
                
            </div>
        );
    }
}


UserInputs.propTypes = {
    
};

export default UserInputs
