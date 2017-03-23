//Libs
import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router'

//Components
import Layout from './components/Layout'
import Home from './components/Home'
import EventOrgs from './components/eventorgs/EventOrgs'
import EventOrgDetails from './components/eventorgs/EventOrgDetails'
import Events from './components/events/Events'
import AllEvents from './components/events/all/AllEvents'
import Music from './components/events/categories/Music'
import Sports from './components/events/categories/Sports'
import NotFound from './components/NotFound'

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}/>
			<Route path="eventorgs" component={EventOrgs}/>
			<Route path="eventorgs/:id" component={EventOrgDetails}/>
			<Route path="events" component={Events}>
				<IndexRedirect to="all"/>
				<Route path="all" component={AllEvents}/>
				<Route path="music" component={Music}/>
				<Route path="sports" component={Sports}/>
			</Route>
			<Route path="*" component={NotFound}/>
		</Route>
	</Router>
)

export default routes;