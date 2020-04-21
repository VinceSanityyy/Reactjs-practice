import React, { Component } from 'react';
import {Navbar,Container} from 'react-bootstrap';
class Header extends Component{
    render(){
        return(
            <div className="col-md-12">
            <Navbar expand="lg" variant="light" bg="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#">Header</Navbar.Brand>
            </Container>
            </Navbar>
            </div>
        )
    }
}

export default Header;