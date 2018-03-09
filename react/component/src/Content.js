import React from "react";
//============================== demo1
// export default class Content extends React.Component {
// 	render() {
// 		return (
// 			<h1> It 's Working!!!</h1>
// 		);
// 	}
// }

//============================== demo2 equal to demo1
function Row(props){
	return <h1>Hello {props.name}</h1>;
}
export default function Content() {
  return (
		<div>
			<Row name="Foo" />
			<Row name="Bar" />
		</div>
	);
}