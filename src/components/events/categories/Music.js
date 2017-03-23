//Libs
import React, {Component} from 'react';
import superagent from 'superagent';

class Music extends Component {

	constructor(){
		super()
		this.state = {
			music: []
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
				music: response.body.results
			})
		})
		
	}

	render(){

		const data = this.state.music

		return(
			<div className="container">
			{
				data.map((event) => {
					return(
						event.category == 'Music'
						?
						<div key={event._id}>
							<p><b>{event.title}</b></p>
							<span>category: {event.category}</span>
							<p>{event.description}</p>
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

export default Music;