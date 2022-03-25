import React, { Component } from "react";
import Loadable from "react-loadable";
import Loading from "./components/Loading";

//组件预加载
const Home = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ "./components/Home"),
  loading: Loading,
  delay: 300, // 0.3 seconds
  timeout: 10000 // 10 seconds
});

class App extends Component {
  state = { showBar: false };

  onClick = () => {
    this.setState({ showBar: true });
  };

  onMouseOver = () => {
    Home.preload();
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.onClick} onMouseOver={this.onMouseOver}>
            Show
          </button>
          {this.state.showBar && <Home />}
        </div>
      </div>
    );
  }
}

export default App;
