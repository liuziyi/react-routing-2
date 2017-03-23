//Libs
import React, {Component} from 'react';
import superagent from 'superagent';

//Components
import EventOrgList from './EventOrgList';

class EventOrgs extends Component {

	constructor(){
		super()
		this.state = {
			eventorgs: []
		}
	}

	componentDidMount(){
		superagent
		.get('/api/eventorg')
		.query(null)
		.set('Accept', 'application/json')
		.end((err,response) => {
			if(err){
				alert(err)
				return
			}
			// console.log(JSON.stringify(response.body.results))
			this.setState({
				eventorgs: response.body.results
			})
		})
	}

	render(){

		return(
			<div>
				<h2 className="text-center">Event Organisers</h2>
				<EventOrgList data={this.state.eventorgs} />
			</div>
		)
	}
}

export default EventOrgs;