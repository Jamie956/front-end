import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
	render() {
		return (
			<div>
        <Link to="bar/search?os=linux">Bar Search</Link> |
        <Link to="baz/the_silence_of_the_lambs">Baz</Link> |
        <Link to="">Foo</Link> |
        {this.props.children}
      </div>
		);
	}
}
