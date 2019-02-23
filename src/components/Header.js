import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Wallet</Navbar.Brand>
                    <Nav className="ml-auto mr-3">
                        <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/expense-tracker">Expense Tracker</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/bank-locations">Bank Locations</NavLink></Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Header
