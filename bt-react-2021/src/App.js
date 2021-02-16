// import React library
import React from 'react'
// import useState hook library
import { useState } from 'react'

import Header from './components/Header';
import Tasks from './components/Tasks';

// react f-n component
function App() {
  /**
   * state should be used in the top-level component
   * so that it can be passed on to other components 
  */

// useState hook to use state in f-n component
const [tasks, setTasks] = useState(
  // use setTasks method to change data in tasks array
  /* setTasks([...tasks //spread array, //add new properties to array]) */

  // data array
  [
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting st School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5 at 2:30pm',
      reminder: false,
    },
  ]
)

  // return JSX
  return (
    // JSX expression must have only one parent element
    <div className="container">
      <h1>React App</h1>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

// export component
export default App;
