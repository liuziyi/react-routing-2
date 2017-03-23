//Libs
import React, { Component } from 'react';
import superagent from 'superagent';

class EventOrgFeatured extends Component {

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

	render() {
		return (

		)
	}
}

export default EventOrgFeatured;