import React from "react";
import Header from "./Header";

export default class Layout extends React.Component {
	render(){
		const guest = 'Hello World.';
		const again = 'Hello World Again.';
		
		return (
			<div>
				<Header foo={guest}/>
				<Header foo={again}/>
			</div>
		);
	}

}