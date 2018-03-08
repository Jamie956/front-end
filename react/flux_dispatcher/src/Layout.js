import React from "react";
import Store from "./Store";
import Dispatcher from "./Dispatcher";

export default class Layout extends React.Component {

  foo(){
    Dispatcher.dispatch({type: "CREATE", text: "Create a Foo."});
  }

	render() {
    this.foo();

		return (
			<h1> It 's Working!!!</h1>
      
		);
	}
}
