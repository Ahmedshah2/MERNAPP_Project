import React from 'react'
import { Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


export default function GuestNav() {
    return (
        <Navbar>
            <Container>
                <Link className="navbar-brand" to='/'>E-Commerce</Link>
                <Navbar.Toggle aria-aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="nav-link" to="/login">Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
