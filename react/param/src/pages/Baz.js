import React from "react";

export default class Baz extends React.Component{
	render(){
		console.log(this.props);
		const { params } = this.props;
		const { pathname } = this.props.location;
		return (
			<div>
				<h1>Welcome to Baz.</h1>
				video => {params.video} <br/>
				pathname => {pathname}
			</div>
		);
	}
}