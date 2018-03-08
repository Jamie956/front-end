import React from "react";
import Store from "./Store";
import Row from "./Row";

export default class Controller extends React.Component {
	render() {
		const tasks = Store.get();
		console.log(tasks);

		const Rows = tasks.map((task) => {
			return <Row key={task.id} {...task}/>;
		});
		console.log(Rows);
		
		return (
			<div>
				{Rows}
			</div>
		);
	}
}