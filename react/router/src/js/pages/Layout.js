import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component{
	navigate(){
		// this.props.history.pushState(null, "/");
		this.props.history.replaceState(null, "/");
	}

	render(){
		const { location } = this.props;
		const featuredClass = location.pathname == "/" ? "active" : "";
		const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
		const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
		
		return (
			<div>
				<h1>newbee.com</h1>
				{this.props.children}
				<ul>
					<li class={archivesClass}>
						<Link to="archives">archives</Link>
					</li>
					<li class={settingsClass}>
						<Link to="settings">settings</Link>
					</li>
					<li class={featuredClass}>
						<button onClick={this.navigate.bind(this)}>featured</button>
					</li>
				</ul>					
			</div>
		);
	}
}