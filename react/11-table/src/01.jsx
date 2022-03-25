import React, { Component } from "react";
import ReactTable from "react-table";

//baisc
class App extends Component {
  render() {
    const data = [
      {
        name: "Diko",
        age: 12,
        friend: {
          name: "Juju",
          age: 18
        }
      },
      {
        name: "Juju",
        age: 18,
        friend: {
          name: "Pina",
          age: 25
        }
      }
    ];

    const columns = [
      {
        Header: "Info",
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Age",
            accessor: "age",
            Cell: e => <h4>{e.value}</h4>
          }
        ]
      },
      {
        Header: "Friend",
        columns: [
          {
            id: "friendName",
            Header: "Friend Name",
            accessor: e => <h1>{e.friend.name}</h1>
          },
          {
            Header: <h2>Friend Age</h2>,
            accessor: "friend.age"
          }
        ]
      }
    ];

    const divStyle = {
      color: "blue",
      height: 42
    };

    return (
      <div style={divStyle} className="container">
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={5}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default App;
