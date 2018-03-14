import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	//demo1 ==============================
	render(){
		const name = "Papo";
		return (
			<h1>It's {name}</h1>
		);
	}

	//demo2 ==============================
	// getVal(){
	// 	return "Pipi";
	// }
	// render(){
	// 	const name = "Papo";
	// 	return (
	// 		<h1>It's {this.getVal()}</h1>
	// 	);
	// }

	//demo3 ==============================
	// constructor() {
	// 	super();
	// 	this.name = "Fihi";
	// }
	// render() {
	// 	return ( <h1> It 's {this.name}</h1>
	// 	);
	// }
}

ReactDOM.render( <Layout /> , document.getElementById('app'));