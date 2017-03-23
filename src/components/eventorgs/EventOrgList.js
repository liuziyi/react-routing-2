//Libs
import React, {Component} from 'react';

//Components
import EventOrg from './EventOrg';

class EventOrgList extends Component {

	render(){

		const data = this.props.data;

		const listItems = data.map((eventorg) => {
			return(
				// <EventOrg key={eventorg._id} name={eventorg.name} bio={eventorg.bio}/>
				<EventOrg key={eventorg._id} {...eventorg} />
			)
		})

		return(
			<div className="container">
				{listItems}
			</div>
		)
	}
}

export default EventOrgList;