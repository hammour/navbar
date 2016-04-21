console.log('js working');
import React from 'react';
import Home from './components/home';
import Register from './components/register';
import Login from './components/Login';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';



const router = (
	<Router history={hashHistory}>
		<Route path="/"  component={Home}/>
		<Route path="/register" component={Register} />
		<Route path="/Login"  component={Login}/>
	</Router>

);

ReactDOM.render(router, document.querySelector('main'));