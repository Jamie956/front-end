import React, { Component } from "react";
import ReactTable from "react-table";

//rowinfo
class App extends React.Component {
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
          getTdProps={(state, rowInfo, column, instance) => {
            return {
              onMouseEnter: e =>
                console.log("Cell - onMouseEnter", {
                  state,
                  rowInfo,
                  column,
                  instance,
                  event: e
                })
            };
          }}
          // getTdProps={(state, rowInfo, column, instance) => {
          //   return {
          //     onClick: (e, handleOriginal) => {
          //       console.log(e)
          //       alert(rowInfo.row.name)
          //     }
          //   }
          // }}
        />
      </div>
    );
  }
}

export default App;
