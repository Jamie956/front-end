import React, { Component } from "react";
import ReactTable from "react-table";

//server-side
const rawData = [
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
  },
  {
    name: "Tomcat",
    age: 19,
    friend: {
      name: "Dog",
      age: 25
    }
  },
  {
    name: "Nash",
    age: 26,
    friend: {
      name: "Juju",
      age: 5
    }
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      pages: 0,
      loading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(state, instance) {
    this.setState({ loading: true });

    console.log(state.pageSize, state.page, state.sorted, state.filtered);
    this.setState({
      data: rawData,
      pages: 100,
      loading: false
    });
  }

  render() {
    const { data, pages, loading } = this.state;

    const columns = [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Age",
        accessor: "age",
        Cell: e => <h4>{e.value}</h4>
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
          manual // Forces table not to paginate or sort automatically, so we can handle it server-side
          pages={pages} // Display the total number of pages
          loading={loading} // Display the loading overlay when we need it
          onFetchData={this.fetchData} // Request new data when things change
          filterable
        />
      </div>
    );
  }
}

export default App;
