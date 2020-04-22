import React from 'react'
import {Switch,BrowserRouter,Route,HashRouter} from 'react-router-dom'
import Login from './components/login/login'
import Home from './components/home/home'
import MainScreen from './components/mainscreen/mainscreen'
const Routes = ()=>(
    <BrowserRouter>

    <Switch>
        <Route exact path = '/login' component = {Login}/>
        <Route exact path = '/home' component = {MainScreen}/>
        <Route exact path = '/' component = {Home}/>
    </Switch>

    </BrowserRouter>
)


export default Routes;