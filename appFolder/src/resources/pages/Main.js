import React from 'react';
import { HashRouter, Route } from "react-router-dom";
//import Home from './Home';
import Companies from './Companies'
//import Signup from '../../Pages/Sample';

const Main = () => {
    return (
        <HashRouter basename="/">
            <div>
                <Route exact path="/" component={Companies} />
                <Route exact path="/Companies" component={Companies} />
                <Route exact path="/test"/>
            </div>
        </HashRouter>
    )
}

export default Main;