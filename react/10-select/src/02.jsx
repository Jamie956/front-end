import React, { Component } from "react";
import Select from "react-select";

class App extends Component {
  state = {
    selectedOption: ""
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        name="form-field-name"
        value={selectedOption}
        onChange={this.handleChange}
        options={[
          { value: "one", label: "One" },
          { value: "two", label: "Two" }
        ]}
      />
    );
  }
}

export default App;
