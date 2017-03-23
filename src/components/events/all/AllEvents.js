//Libs
import React, {Component} from 'react';
import superagent from 'superagent';

//Components
import EventList from './EventList';

class AllEvents extends Component {

	constructor(){
		super()
		this.state = {
			events: []
		}
	}

	componentDidMount(){
		superagent
		.get('/api/event')
		.query(null)
		.set('Accept', 'application/json')
		.end((err,response) => {
			if(err){
				alert(err)
				return
			}
			// console.log(JSON.stringify(response.body.results))
			this.setState({
				events: response.body.results
			})
		})

	}

	render(){

		return(
			<div className="container">
				<p><b>All Events</b></p>
				<EventList data={this.state.events}/>
			</div>
		)
	}
}

export default AllEvents;