import React, { Component } from "react";

class T01 extends Component {
  render() {
    return (
      <div>x</div>
    );
  }
}

const T02 = () => {
  return (
    <div>y</div>
  );
};

const Foo = () => <h1>z</h1>;
class T03 extends Component {
  render() {
    return (
      <div>
        <Foo />
      </div>
    );
  }
}

const alertFun = () => alert("click!");
const T04 = () => {
  return <button onClick={alertFun}>click</button>;
};

class T05 extends Component {
  constructor() {
    super();
    this.foo = this.foo.bind(this);
  }
  foo() {
    alert("foo");
  }
  render (){
    return (
      <button onClick={this.foo}>c</button>
    )
  }
}

class T06 extends Component {
  constructor() {
    super();
    this.state = {
      greeting: "init"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      greeting: "halo"
    });
  }
  render() {
    return (
      <div>
        {this.state.greeting}
        <p />
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

function UserForm ({ user })  {
  return (
    <div> {user.name} </div>
  );
};
class T07 extends Component {
  render() {
    let user = { name: "tom" };
    return (
      <UserForm user={user} />
    );
  }
}

class T08 extends Component {
  constructor() {
    super();
    this.state = {
      title: "g"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <input
          name="title"
          value={this.state.title}
          onChange={e => {
            this.handleChange(e);
          }}
        />
      </div>
    );
  }
}

function FancyBorder({ color, children }) {
  return <div style={{ color: color }}>{children}</div>;
}
class T09 extends Component {
  render() {
    return (
      <FancyBorder color="blue">
        <h1>Welcome</h1>
      </FancyBorder>
    );
  }
}

function A() {
  return <h1>a</h1>;
}
function B({ com }) {
  return <div>{com}</div>;
}
function T10() {
  return <B com={<A />} />;
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }
  render() {
    return <div>{this.state.name}</div>;
  }
}
const T11 = () => {
  let name = "bi";
  return <Form name={name} />;
};

const UserGreeting = props => <h1>Welcome back!</h1>;
const GuestGreeting = props => <h1>Please sign up.</h1>;
const T12 = props => {
  return <div>{true ? <UserGreeting /> : <GuestGreeting />}</div>;
};

class T13 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault(); //阻止事件往下执行
    alert("submit");
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const Button = ({ kind, ...rest }) => {
  return <button className={kind === "a" ? "a" : "b"} {...rest} />;
};
const T14 = () => {
  return (
    <div>
      <Button kind="b" onClick={() => alert("click")}>
        click
      </Button>
    </div>
  );
};

class T15 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    alert("email: " + this.email.value);
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input defaultValue="email" type="text" ref={e => (this.email = e)} />
        <p />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default T15;
