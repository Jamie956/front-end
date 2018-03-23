import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	componentWillMount() {
		console.log('WillMount');
	}
	//Call it, when component inserted to the DOM
	componentDidMount() {
		console.log('DidMount');
	}

	//Call it, when component is removed from the DOM
	componentWillUnmount() {
		console.log('WillUnmount');
	}

	render() {
		return (
			<h1>U know</h1>
		);
	}
}

setTimeout(() => {
	console.log('ready to remove component');
	ReactDOM.unmountComponentAtNode(document.getElementById('app'));
}, 3000);

setTimeout(() => {
	console.log('ready to render component');
	ReactDOM.render(<Layout />, document.getElementById('app'));
}, 6000);

ReactDOM.render(<Layout />, document.getElementById('app'));