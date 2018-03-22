import React from "react";

class Foo extends React.Component {
	render() {
		return (
			<h1>It is Foo</h1>
		);
	}
}

function Bar() {
  return (
		<div>
      <h1>It is Bar</h1>
		</div>
	);
}

export default class Layout extends React.Component {
	render() {
		return (
      <div>
        <Foo/>
        <Bar />
      </div>
    );
	}
}