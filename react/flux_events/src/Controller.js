import React from "react";
import Store from "./Store";
import Row from "./Row";

export default class Controller extends React.Component {
	constructor() {
		super();
		this.state = {
			tasks: Store.get(),
		};
	}
	
	componentWillMount() {
		Store.on("change", () => {
			this.setState({
				tasks: Store.get(),
			});
		});
	};

	create(){
		Store.createTask('foo');
	}

	render() {
		const { tasks } = this.state;
		console.log(tasks);

		const Rows = tasks.map((task) => {
			return <Row key={task.id} {...task}/>;
		});
		console.log(Rows);
		
		return (
			<div>
				<button onClick={this.create.bind(this)}>Create</button>
				{Rows}
			</div>
		);
	}
}