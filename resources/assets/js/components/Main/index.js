import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Landing from './../Landing';
import MainDashboard from './../MainDashboard';
import Login from './../auth/Login';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default class Main extends Component {
    render() {
        return (
           <main>
               <Switch>
                   <Route exact path="/" component={Landing}/>
                   <Route path="/home" component={MainDashboard}/>
                   <Route path="/login" component={Login}/>
               </Switch>
           </main>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<BrowserRouter>
        <Main/>
    </BrowserRouter>, document.getElementById('example'));
}