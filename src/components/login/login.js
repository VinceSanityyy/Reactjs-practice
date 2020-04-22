import React,{Component} from 'react'
import {Card,Button,Form} from 'react-bootstrap';
import {postData} from '../../services/postData'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
class Login extends Component{
    constructor(props) {
      super(props);
    
      this.state = {
        email:'',
        password:'',
        redirect: false
      };
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.login = this.login.bind(this)
    }

    login(){
        const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
        axios.post(PROXY_URL+'http://52.74.70.6/api/auth/login',{
            email: this.state.email,
            password: this.state.password
       },{
        headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                crossdomain: true,
        }
       }).then((res)=>{
        console.log(res)
        localStorage.setItem('Bearer', res.data.bearer_token)
        this.setState({redirect: true})
       }).catch((err)=>{
        console.log(err)
       })
    }
    onEmailChange(e){
        this.setState({email: e.target.value});
    }
    onPasswordChange(e){
        this.setState({password: e.target.value});
    }
    render(){
        if (this.state.redirect) {
            return (<Redirect to ={'/home'}/>)
        }
        if (localStorage.getItem('Bearer')) {
            return (<Redirect to ={'/home'}/>)
        }
        return(
              <div className="col-md-12">
                <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={this.state.email} onChange={this.onEmailChange} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={this.state.password} onChange={this.onPasswordChange} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button onClick={this.login} variant="primary" >
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