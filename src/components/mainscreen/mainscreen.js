import React,{Component} from 'react'
import {Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
class MainScreen extends Component{
    constructor(props) {
      super(props);
    
      this.state = {
        redirect:false
      };
      this.logOut = this.logOut.bind(this)
    }
    componentWillMount(){
        if(localStorage.getItem('Bearer')){
            console.log('Authenticated')
        }else{
            this.setState({redirect:true})
        }
    }
    logOut(){
        // console.log('clicked')
         localStorage.setItem('Bearer', '')
         localStorage.clear()
         this.setState({redirect:true})
    }
    render(){
        if (this.state.redirect) {
            return (<Redirect to ={'/login'}/>)
        }
        return(
            <div>
             <br></br><br></br> <br></br><br></br>
                  <p>
                <code>Home</code>
                </p>
                 <Button onClick={this.logOut} variant="outline-primary">Log Out</Button>
            </div>
        )
    }
}

export default MainScreen;