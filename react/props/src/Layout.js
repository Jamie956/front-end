import React from "react";

class Header extends React.Component {
	render(){
		return (
			<div>
				{this.props.foo}
			</div>
		);
	}
}

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