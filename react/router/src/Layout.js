import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
	render() {
    const pathname = this.props.location.pathname;
		return (
			<div>
        <Link to="bar">Bar</Link> |
        <Link to="baz">Baz</Link> |
        <Link to="">Foo</Link> |
        {this.props.children} 
        {pathname}
      </div>
		);
	}
}
