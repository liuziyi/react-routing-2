//Libs
import React, {Component} from 'react';
import { Link } from 'react-router'

const EventOrg = props => {
	return(
		<Link to={"/eventorgs/"+props._id}>
			<p><b>{props.name}</b></p>
		</Link>
	)
}

export default EventOrg;