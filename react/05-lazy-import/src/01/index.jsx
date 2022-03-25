import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.handleloadhome = this.handleloadhome.bind(this);
    this.handleloadabout = this.handleloadabout.bind(this);
  }
  handleloadhome() {
    import("./Home.jsx")
      .then(mod => {
        console.log(mod);
      })
      .catch(e => console.log("err", e));
  }
  handleloadabout() {
    import("./About.jsx")
      .then(mod => {
        console.log(mod);
      })
      .catch(e => console.log("err", e));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleloadhome}>load home</button>-|-
        <button onClick={this.handleloadabout}>load about</button>
      </div>
    );
  }
}

export default App;
