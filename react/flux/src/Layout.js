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
    switch(action.type) {
      case "CREATE": {
        console.log('CREATE.');
        break;
      }
      case "UPDATE": {
        console.log('UPDATE.');
        break;
      }
    }
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
  update(text) {
    dispatcher.dispatch({ type: "UPDATE", text });
  }
} 
const action = new Action;

/**
 * Layout
 */
export default class Layout extends React.Component {
  handleCreate(){
    action.create(Date.now());
	};
  handleUpdate(){
    action.update(Date.now());
	};
	render() {
		return (
			<div>
				<button onClick={this.handleCreate.bind(this)}>Create</button> | <button onClick={this.handleUpdate.bind(this)}>Update</button>
			</div>
		);
	}
}
