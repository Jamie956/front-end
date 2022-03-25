import React, { Component } from "react";

//table

const data = [
  {
    id: 1,
    name: "Tom",
    age: 18
  },
  {
    id: 2,
    name: "Monica",
    age: 28
  },
  {
    id: 3,
    name: "Bee",
    age: 16
  }
];

const columns = [
  {
    header: "Name",
    accessor: "name"
  },
  {
    header: "Age",
    accessor: "age"
  },
  {
    header: "ID",
    accessor: "id"
  }
];
const renderThs = columns => {
  return columns.map((column, i) => <th key={i}>{column.header}</th>);
};

const renderRows = (rows, columns) => {
  return rows.map((row, i) => <tr key={i}>{renderCell(row, columns)}</tr>);
};

const renderCell = (row, columns) => {
  return columns.map((column, i) => <td key={i}>{row[column.accessor]}</td>);
};

const Table = props => {
  const { columns, rows } = props;
  return (
    <div>
      <table border="1">
        <thead>
          <tr>{renderThs(columns)}</tr>
        </thead>
        <tbody>{renderRows(rows, columns)}</tbody>
      </table>
    </div>
  );
};

class App extends Component {
  render() {
    return <Table rows={data} columns={columns} />;
  }
}

export default App;
