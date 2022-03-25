import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, withRouter } from "react-router-dom";

//子组件获取router信息
const About = withRouter(props => {
  console.log(props);
  return <button onClick={() => props.history.push("/about")}>about</button>;
});
// const About = props => {
//   console.log(props)
//   return <button onClick={() => props.history.push("/about")}>about</button>;
// };

const App = () => (
  <BrowserRouter>
    <About />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));