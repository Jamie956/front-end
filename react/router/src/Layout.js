import React from "react";
import { Router, Route, IndexRoute, hashHistory, Link } from "react-router";

const Links = (props) => (
  <div>
    <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/search/soso">Search</Link>
    {props.children}
    {props.location.pathname}
  </div>
)

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

const Search = () => (
  <div>
    <h2>Search</h2>
  </div>
)

const Layout = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Links}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/search(/:key)" component={Search} />
    </Route>
  </Router>  
);

export default Layout;