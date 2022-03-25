import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;

const App = () => (
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

ReactDOM.render(<App />, document.getElementById("root"));
