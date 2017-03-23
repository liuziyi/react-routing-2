//Libs
import React, {Component} from 'react';

//Components
import Event from './Event';

const EventList = props => {

	const data = props.data;

	const listItems = data.map((event) => {
		return(
			<Event key={event._id} title={event.title} description={event.description}/>
		)
	})

	return(
		<div className="container">
			{listItems}
		</div>
	)
}

export default EventList;