import React, {Component} from 'react';
import './App.css';

import Header from './components/header/header'
import Footer from './components/footer/footer'

import Routes from './routes'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      AppName: 'Practice App',

    }
  }
 render(){
  return (
    <div className="App">
      <title>{this.state.AppName}</title>
        <Header/>
        <Routes/>
        <Footer/>
    </div>
  
  );
 }
}

export default App;