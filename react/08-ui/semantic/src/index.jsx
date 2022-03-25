import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Button } from "semantic-ui-react";
// import 'semantic-ui-css/components/button.min.css'
import 'semantic-ui-css/components/button.css'

class App extends Component {
  render() {
    return (
      <div>
        <Button>Click Here</Button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
