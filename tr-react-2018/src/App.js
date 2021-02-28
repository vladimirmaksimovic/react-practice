// import React library
import React from "react";

// import components in top level component "App"
import Table from "./components/Table";

// class component
class App extends React.Component {
  // constructor method
  constructor() {
    // super method
    super();
    // state object
    this.state = {
      employees: [
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
      ],
    };
    // bind event method
    this.removeEmployee = this.removeEmployee.bind(this);
  }

  // remove/delete employee method
  removeEmployee = (index) => {
    //console.log(index)
    const { employees } = this.state;

    this.setState({
      employees: employees.filter((empolyee, i) => {
        return i !== index;
      }),
    });
  };

  // render method
  render() {
    // return JSX
    return (
      // JSX
      <div>
        <Table
          employeesData={this.state.employees}
          removeEmployee={this.removeEmployee}
        />
      </div>
    );
  }
}

export default App;
