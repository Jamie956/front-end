import React from "react";

class Header extends React.Component{
	handleChange(e){
		const title = e.target.value;
		this.props.changeTitle(title);
	}
	render(){
		return (
			<div>
				<h1>{this.props.title}</h1>
				<input value={this.props.title} onChange={this.handleChange.bind(this)} />
			</div>
		);
	}
}

export default class Layout extends React.Component {
  constructor(){
		super();
		this.state = {title: "Here We Go!"}
	}
	changeTitle(title){
		this.setState({title});
  }
	render() {
		return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
      </div>
		);
	}
}