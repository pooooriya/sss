import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/navbar.css'

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="light" className="navstyle">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toogler"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar">
                    <Nav>
                        <Nav.Link as={Link} className="nav-link" to="/shopingCard">
                        <i className="fa fa-shopping-cart ml-1" aria-hidden="true"></i>
                            <span>سبد خرید</span>
                        </Nav.Link>

                        <Nav.Link as={Link} className="nav-link" to="/favorites">
                        <i className="fa fa-star-o ml-1" aria-hidden="true"></i>
                            <span>علاقه مندی ها</span>
                        </Nav.Link>

                        <Nav.Link as={Link} className="nav-link" to="/home">
                        <i className="fa fa-home ml-1" aria-hidden="true"></i>
                            <span>صفحه اصلی</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBar;