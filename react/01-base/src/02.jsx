import React, { Component } from "react";

//组件生命周期
class App extends Component {
  constructor() {
    super();
  }
  //第一次渲染前触发
  componentWillMount() {}
  //第一次渲染后触发
  componentDidMount() {}
  //属性props发生变化时触发
  componentWillReceiveProps() {}
  //判断组件是否要再次渲染，state或props改变时触发，如果返回flase就不会渲染
  shouldComponentUpdate(nextState) {}
  //再次渲染前
  componentWillUpdate() {}
  //再次渲染后
  componentDidUpdate() {}
  //移除组件触发
  componentWillUnmount() {}

  render() {
    return <h1>hi</h1>;
  }
}

// //移除组件
// ReactDOM.unmountComponentAtNode(document.getElementById('root'));
export default App;
