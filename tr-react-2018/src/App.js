// import React library
import React, { Component } from "react";

// import components in top level component "App"
import Table from "./components/Table";
// class component
class App extends Component {
  // render method
  render() {
    // state object
    const employees = [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ];

    // return JSX
    return (
      // JSX
      <div>
        <Table employeesData={employees} />
      </div>
    );
  }
}

export default App;
