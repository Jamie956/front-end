import React from "react";
import Store from "./Store";
import * as Action from "./Action";

export default class Layout extends React.Component {
  create(){
    Action.create(Date.now());
	};
	
	render() {
		return (
			<div>
				<h1> It 's Working!!!</h1>
				<button onClick={this.create.bind(this)}>Create</button>
			</div>
		);
	}
}
