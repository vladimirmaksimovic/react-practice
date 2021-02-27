// import React library
import React, { Component } from 'react'

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
  )
}

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Natasa</td>
        <td>Sekretar</td>
      </tr>
      <tr>
        <td>Branka</td>
        <td>Racunovodja</td>
      </tr>
      <tr>
        <td>Suza</td>
        <td>Administracija</td>
      </tr>
      <tr>
        <td>Dragana</td>
        <td>Direktor</td>
      </tr>
    </tbody>
  )
}

// class component
class Table extends Component {
  // render method
  render() {
    // return JSX
    return (
      // JSX
      <table>
        <TableHeader />
        <TableBody />
      </table>
    )
  }
}

export default Table
