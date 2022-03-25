import React, { Component } from "react";
import Loadable from "react-loadable";
import Loading from "./Loading";
import { Route, Link } from "react-router-dom";

const Home = Loadable({
  loading: Loading,
  loader: () => import(/* webpackChunkName: 'home' */ "./Home"),
  modules: ["./Home"],
  webpack: () => [require.resolveWeak("./Home")],
  delay: 300, // 0.3 seconds
  timeout: 10000 // 10 seconds
});

const About = Loadable({
  loading: Loading,
  loader: () => import(/* webpackChunkName: 'about' */ "./About"),
  modules: ["./About"],
  webpack: () => [require.resolveWeak("./About")],
  delay: 300,
  timeout: 10000
});

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
