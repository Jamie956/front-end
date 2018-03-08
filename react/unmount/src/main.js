import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	componentWillMount() {
		console.log('componentWillMount');
  }

  componentWillUnmount() {
		console.log('componentWillUnmount');
	}
	
	render() {
		return (
			<h1> It 's Working!!!</h1>
		);
	}
}

setTimeout(() => {
	ReactDOM.unmountComponentAtNode(document.getElementById('app'));
}, 3000);

setTimeout(() => {
	ReactDOM.render(<Layout /> , document.getElementById('app'));
}, 5000);

ReactDOM.render(<Layout /> , document.getElementById('app'));