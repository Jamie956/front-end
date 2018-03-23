import React from "react";
import { Router, Route, IndexRoute, hashHistory, Link } from "react-router";

class Mylink extends React.Component {
	render() {
    const pathname = this.props.location.pathname;
		return (
			<div>
        <Link to="">Home</Link> | <Link to="/about">About</Link>
        {this.props.children}
        {pathname}
      </div>
		);
	}
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default class Layout extends React.Component {
	render() {
		return (
      <Router history={hashHistory}>
        <Route path="/" component={Mylink}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="/about" component={About}></Route>
        </Route>
      </Router>
		);
	}
}