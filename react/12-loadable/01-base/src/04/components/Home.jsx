import React, { Component } from "react";

export class Home extends Component {
  render() {
    console.log(this.props.data.items);
    return (
      <div>
        Home
        <p />
        {this.props.data.items[0].name}
      </div>
    );
  }
}

export default Home;
