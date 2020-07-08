import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {Route,Switch} from 'react-router-dom'
import Home from './component/Home/home'
import Layout from './hoc/Layout/layout'

class Routes extends Component {
    render(){
        return(
            <Layout>
                <Switch>
                     <Route path="/" exact component={Home}></Route>
                </Switch>
            </Layout>
        )
        
    }
}

export default Routes