import React,{Component} from 'react'
import {Button} from 'react-bootstrap'

class Home extends Component{
    constructor(props) {
      super(props);
    
      this.state = {
        redirect:false
      };
    }
    render(){
        return(
            <div>
                <br></br><br></br>
                <img className="App-logo" alt="logo" src={require('./logo.svg')} />
                <p>
                <code>React JS practice</code>
                </p>
                <Button href="/login" variant="outline-primary">Log in</Button>
            </div>
        )
    }
}

export default Home;