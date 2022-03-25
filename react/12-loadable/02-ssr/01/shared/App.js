import React, { Component } from "react";
import Loadable from "react-loadable";

const Home = Loadable({
  loading: <div>Loading</div>,
  loader: () => import(/* webpackChunkName: 'home' */ "./Home")
});

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
