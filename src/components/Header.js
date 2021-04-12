import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { useAuth } from '../customHooks/useAuth';

const Header = () => {
    const { user, signOut } = useAuth() || {};
    
    return (
        <Navbar bg="light" expand="lg" >
            <Container>
                <Navbar.Brand  as={Link} to="/">Movie Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {
                            user?.email ?
                            <>
                                <Nav.Link as={Link} to="/my-bookings">My Bookings</Nav.Link>
                                <Nav.Link onClick={signOut} as={Link} to="/login">Logout</Nav.Link>
                            </>
                            :
                            <Nav.Link  as={Link} to="/Login">Login</Nav.Link>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;