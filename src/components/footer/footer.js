import React,{Component} from 'react'
import {Navbar,Container} from 'react-bootstrap';

class Footer extends Component{
    render(){
        return(
           <div className="col-md-12">
            <Navbar expand="lg" variant="light" bg="dark" fixed="bottom">
            <Container>
                <Navbar.Brand href="#">Footer</Navbar.Brand>
            </Container>
            </Navbar>
           </div>
        )
    }
}

export default Footer;