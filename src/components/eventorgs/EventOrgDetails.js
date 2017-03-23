//Libs
import React, {Component} from 'react';
import superagent from 'superagent';

class EventOrgDetails extends Component {

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

		const data = this.state.eventorgs
		const id = this.props.params.id
		// const eventorg = data.filter((eventorg) => eventorg._id === id)[0] //[{"_id":"58cf8b36e2080a6966228781","__v":0,"timestamp":"2017-03-20T07:56:38.149Z","image":"","bio":"Event Organiser 1 bio","name":"Event Organiser 1"}]
		// console.log(JSON.stringify(eventorg))

		return(
			<div className="container">
			{
				data.map((eventorg) => {
					return(
						eventorg._id === id
						?
						<div key={eventorg._id}>
							<h2>{eventorg.name}</h2>
							<p>{eventorg.bio}</p>
						</div>
						:
						null
					)
				})
			}
			</div>
		)
	}
}

export default EventOrgDetails;