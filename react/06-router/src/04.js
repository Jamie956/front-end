import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

//路由参数匹配
const Home = ({ match }) => {
  console.log(match);
  return <div />;
};

const App = () => (
  <BrowserRouter>
    <div>
      <Link to="/123">Item</Link> |
      <Link to="/item/asc">asc</Link> |
      <Link to="/item/desc">desc</Link>
      <hr />
      <Route exact path="/:id" component={Home} />
      <Route exact path="/item/:dir(asc|desc)" component={Home} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
