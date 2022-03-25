import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    let data;
    if (__isClient__) {
      data = window.__INITIAL_DATA__;
      // delete window.__INITIAL_DATA__;
      console.log("Get data from client: ", data);
    } else {
      data = this.props.staticContext.data;
      console.log("Get data from server: ", data);
    }
    this.state = {
      data: data
    };
  }
  render() {
    return <div>{this.state.data.name}, About</div>;
  }
}
