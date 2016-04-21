import React from 'react';
import Nav from './navs';
export default React.createClass({
	render: function(){
		return (

		<section>
		 <Nav/>
			<h1>Login</h1>
				<form>
					<input type="text" placeholder =""/>
					<input type ="Password" placeholder=""/>
					<button type="submit">Login</button>
				</form>
		</section>	
		);
	}
});