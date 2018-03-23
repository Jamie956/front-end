import React from "react";
import Store from "./store";
import Row from "./row";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			tasks: Store.getTasks(),
		};
	}
	
	componentWillMount() {
		Store.on("change", () => {
			this.setState({
				tasks: Store.getTasks(),
			});
		});
	};

	create(){
		Store.createTask(Date.now());
	}

	render() {
		const { tasks } = this.state;
		const Rows = tasks.map((task) => {
			return <Row key={task.id} {...task}/>;
		});
		
		return (
			<div>
				<button onClick={this.create.bind(this)}>Create</button>
				{Rows}
			</div>
		);
	}
}