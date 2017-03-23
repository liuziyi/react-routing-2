//Libs
import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-static-top">

				<div className="container-fluid">
				    <div className="navbar-header">
				    	<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        	<span className="sr-only">Toggle navigation</span>
				        	<span className="icon-bar"></span>
				        	<span className="icon-bar"></span>
				        	<span className="icon-bar"></span>
				    	</button>
				    	<Link className="navbar-brand" to="/">React Routering 2</Link>
				    </div>

				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				    	<ul className="nav navbar-nav navbar-right">
				        	<li><Link to="/" activeClassName="active">Home</Link></li>
				        	<li><Link to="/eventorgs" activeClassName="active">Event Organisers</Link></li>
				        	<li><Link to="/events" activeClassName="active">Events</Link></li>
				    	</ul>
				    </div>
				</div>

			</nav>
		)
	}
}

export default Nav;