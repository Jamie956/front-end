import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component{
	navigate(){
		// this.props.history.pushState(null, "/");
		this.props.history.replaceState(null, "/");
	}

	render(){
		return (
			<div>
				<h1>newbee.com</h1>
				{this.props.children}
				<Link to="archives">archives</Link>
				<br/>
				<Link to="settings">settings</Link>
				<br/>
				<button onClick={this.navigate.bind(this)}>featured</button>
			</div>
		);
	}
}