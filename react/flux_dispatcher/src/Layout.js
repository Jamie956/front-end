import React from "react";
import { Dispatcher } from "flux";

/**
 * Dispatcher
 */
const dispatcher = new Dispatcher;
/**
 * Store
 */
class Store {
	handleActions(action) {
		console.log(action);
	}
}
const store = new Store;
dispatcher.register(store.handleActions.bind(store));
/**
 * Action
 */
class Action {
	create(text) {
		dispatcher.dispatch({ type: "CREATE", text });
	}
}
const action = new Action;
/**
 * 
 */
export default class Layout extends React.Component {
	handleCreate() {
		action.create(Date.now());
	}
	render() {
		return (
			<button onClick={this.handleCreate.bind(this)}>Create</button>
		);
	}
}