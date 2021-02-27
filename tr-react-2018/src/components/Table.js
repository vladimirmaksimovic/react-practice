import React, { Component } from 'react'

export class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
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
      </table>
    )
  }
}

export default Table
