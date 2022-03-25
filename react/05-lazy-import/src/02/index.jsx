import React, { Component } from "react";
import Bundle from "./Bundle.jsx";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = props => (
  <Bundle load={() => import(/* webpackChunkName: "home" */ "./Home.jsx")}>
    {Component => <Component {...props} />}
  </Bundle>
);

const About = props => (
  <Bundle load={() => import(/* webpackChunkName: "about" */ "./About.jsx")}>
    {Component => <Component {...props} />}
  </Bundle>
);

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
