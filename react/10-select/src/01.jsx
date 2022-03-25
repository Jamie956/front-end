import React, { Component } from "react";
import Select from "react-select";

class App extends Component {
  onChange = value => {
    this.setState({ value });
    console.log("Boolean Select value changed to", value);
  };
  render() {
    return (
      <div>
        <Select
          onChange={this.onChange}
          options={[
            { value: true, label: "Yes" },
            { value: false, label: "No" }
          ]}
          simpleValue
          value={null}
        />
      </div>
    );
  }
}

export default App;
