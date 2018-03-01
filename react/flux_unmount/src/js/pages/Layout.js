import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component{
	render(){
		return (
			<div>
				<ul>
					<li><Link to="todos">todo</Link></li>
					<li><Link to="holiday">holiday</Link></li>
				</ul>
				{this.props.children}						
			</div>
		);
	}
}