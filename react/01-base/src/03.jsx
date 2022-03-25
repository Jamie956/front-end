import React, { Component } from "react";

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      name: this.state.name
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        New
        <form onSubmit={this.handleSubmit}>
          name:{" "}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

class ListUser extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      name: ""
    };
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let self = this;

    self.setState({
      users: [
        {
          id: "1",
          name: "tom"
        },
        {
          id: "2",
          name: "json"
        }
      ]
    });
  }

  handleEditSubmit(e) {
    e.preventDefault();
    let data = {
      name: this.state.name,
      email: this.state.email
    };
    console.log(data);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleEdit(u) {
    this.setState({
      name: u.name,
      email: u.email
    });
  }
  render() {
    return (
      <div>
        <h1>List</h1>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(u => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>
                  <a href="#" onClick={() => this.handleEdit(u)}>
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h1>Edit</h1>

        <form onSubmit={this.handleEditSubmit}>
          name<input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <AddUser />
        <ListUser />
      </div>
    );
  }
}

export default App;
