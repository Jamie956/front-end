import React from "react";
import Header from "./Header";

export default class Layout extends React.Component {
	//state ==================================
	// constructor(){
	// 	super();
	// 	this.state = {name: "Alo"};
	// }
	// render(){
	// 	return (
	// 		<div>
	// 			{this.state.name}
	// 		</div>
	// 	);
	// }

	//props ==================================
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