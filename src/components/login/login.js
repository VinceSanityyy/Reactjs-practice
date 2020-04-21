import React,{Component} from 'react'
import {Card,Button,Form} from 'react-bootstrap';

class Login extends Component{
    render(){
        return(
           <div className="col-md-12">
                <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                </Card.Body>
                </Card>
           </div>
        )
    }
}

export default Login;