import React from 'react'
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import Login from './components/login/login'
import Home from './components/home/home'
const Routes = ()=>(
    <BrowserRouter>
    <Switch>
        <Route exact path = '/login' component = {Login}/>
        <Route exact path = '/home' component = {Home}/>
    </Switch>
    </BrowserRouter>
)


export default Routes;