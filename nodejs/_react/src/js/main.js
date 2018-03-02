import React from 'react';
import ReactDOM from 'react-dom';

class CustomComponent extends React.Component {
  render() {
    return <h1>Hello</h1>
  }
}

ReactDOM.render(<CustomComponent/>, document.getElementById('app'));