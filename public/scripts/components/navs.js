import {Link} from 'react-router';
import React from 'react';
import user from '../models/user';
import $ from 'jquery';

const Nav = React.createClass({
	getInitialState: function(){
		return {
			user: user
		};
	},
	componentDidMount: function(){
		this.state.user.on('change', ()=>{
			console.log('the user was changed');
			this.setState({
				user: user
			});
		});

	},
	render: function() {
		console.log('navigation render');
		if(this.state.user.get('id')){
			//render the user loged in
			return (
				<div>
					<Link to="/">Home</Link>
					<Link herf="#" onClick={this.logout}>Logout</Link>
					<Link herf="#">{this.state.user.get('firstName')}</Link>
					<Link to="/Dashboard">Dashboard</Link>
				</div>
				);
		}
		else{
			return (
			<div>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/Login">Login</Link>
					<Link to="/register">Register</Link>
				</nav>
			</div>
		); 
		}},
	logout: function(e){
		e.preventDefault();
		console.log('logout');
		this.state.user.clear();
		$.ajax({
			type: 'POST', 
			url: '/auth/logout'
		});
	}	
	}
);
export default Nav;