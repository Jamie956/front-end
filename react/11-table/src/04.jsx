import React, { Component } from "react";
import ReactTable from "react-table";

//edit-cell
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Diko",
          age: 12
        },
        {
          name: "Juju",
          age: 18
        }
      ]
    };
    this.renderEditable = this.renderEditable.bind(this);
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
          // console.log(data[cellInfo.index])

          this.handleSubmit(data[cellInfo.index]);
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }

  handleSubmit(row) {
    console.log("call handleSubmit");

    var submitObj = {
      name: row.name,
      age: row.age
    };
    var postBody = JSON.stringify(submitObj);
    console.log(postBody);
    fetch("/api/edit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: postBody
    })
      .then(res => {
        if (res.status > 200) {
          return res.json().then(data => {});
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { data } = this.state;

    const columns = [
      {
        Header: "Name",
        accessor: "name",
        Cell: this.renderEditable
      },
      {
        Header: "Age",
        accessor: "age",
        Cell: this.renderEditable
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
