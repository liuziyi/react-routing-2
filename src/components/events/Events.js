//Libs
import React, {Component} from 'react';
import { Link } from 'react-router';

class Events extends Component {

	render(){

		return(
			<div className="container">
				<div className="container">
					<h1 className="text-center">Events</h1>
					<ul className="nav nav-pills pull-right">
						<li role="presentation"><Link to="/events/all" activeClassName="active">All</Link></li>
					  	<li role="presentation"><Link to="/events/music" activeClassName="active">Music</Link></li>
					  	<li role="presentation"><Link to="/events/sports" activeClassName="active">Sports</Link></li>
					</ul>
				</div>
				{this.props.children}
			</div>
		)
	}
}

export default Events;