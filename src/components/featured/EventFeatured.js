//Libs
import React, { Component } from 'react';
import superagent from 'superagent';

class EventFeatured extends Component {

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

	render() {
		return (

		)
	}
}

export default EventFeatured;