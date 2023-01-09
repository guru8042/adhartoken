import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <>

            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-live" />
                    <Navbar.Collapse id="responsive-navbar-live" >
                        <Navbar.Brand className=" fs-2 fw-bolder border border-warning rounded" href="#home">Adhar Token API</Navbar.Brand>
                        <Nav className="me-auto fw-bolder m-2">
                            <Link className="p-2 text-warning" to='/'>ADHAR</Link>
                            <Link className="p-2 text-warning" to='/token'>TOKEN</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}

export default Navigation;
