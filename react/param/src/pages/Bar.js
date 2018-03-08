import React from "react";

export default class Bar extends React.Component{
	render(){
		console.log(this.props);
		const { query } = this.props.location;
		const { search } = this.props.location;
		const { pathname } = this.props.location;

		return (
			<div>
				<h1>Welcome to Bar.</h1>
				query => {query.os} <br/>
				search => {search} <br/>
				pathname => {pathname}
			</div>
		);
	}
}