// import React library
import React, { Component } from "react";

// f-n components / simple components
const TableHeader = () => {
  //return JSX
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

// table body component
const TableBody = (props) => {
  // map and store data from props array
  // and return <tr> for each object in array
  const employees = props.employeesData.map((employee, index) => {
    return (
      // always use key prop when rendering lists
      <tr key={index}>
        <td>{employee.name}</td>
        <td>{employee.job}</td>
      </tr>
    );
  });

  // pass stored data variable
  return <tbody>{employees}</tbody>;
};

// class component
class Table extends Component {
  // render method
  render() {
    // receive data from parent component with props
    const { employeesData } = this.props;

    // return JSX
    return (
      // JSX
      <table className='employees-table'>
        <TableHeader />
        {/* pass receieved data to child component */}
        <TableBody employeesData={employeesData} />
      </table>
    );
  }
}

export default Table;
