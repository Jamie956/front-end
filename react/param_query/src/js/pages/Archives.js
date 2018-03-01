import React from "react";

export default class Archives extends React.Component{
	render(){
		console.log(this.props);
		const { query } = this.props.location;
		const { params } = this.props;
		const { article } = params;
		return (
			<div>
				article: {article}
			</div>
		);
	}
}