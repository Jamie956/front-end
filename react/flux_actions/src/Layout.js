import React from "react";
import Store from "./Store";
import * as Action from "./Action";

export default class Layout extends React.Component {
  create(){
    Action.create(Date.now());
	};
  update(){
    Action.update(Date.now());
	};
	render() {
		return (
			<div>
				<button onClick={this.create.bind(this)}>Create</button>
				<br/>
				<button onClick={this.update.bind(this)}>Update</button>
			</div>
		);
	}
}
