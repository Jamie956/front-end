import React from "react";
import Content from "./Content";

export default class Layout extends React.Component {
	render() {
    const contents = [
      <Content key={1}/>,
      <Content key={2}/>      
    ];

		return (
      <div>
        <Content/>
        {contents}
      </div>
    );
	}
}