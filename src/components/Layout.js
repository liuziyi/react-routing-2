//Libs
import React, { Component } from 'react';

//Components
import Nav from './Nav'

class Layout extends Component {
	render() {
		return (
			<div>
				<Nav/>
				{this.props.children}
			</div>
		)
	}
}

export default Layout;