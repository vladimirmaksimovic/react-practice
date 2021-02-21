// import React library
import React from "react";
// import useState and useEffect hook libraries
import { useState, useEffect } from "react";

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

// react f-n component
function App() {
  /**
   * state should be used in the top-level component
   * so that it can be passed on to other components
   */

  // useState hook to use state in f-n component
  const [showAddTask, setShowAddTask] = useState(false);

  // use setTasks method to change data in tasks array
  /* setTasks([...tasks //spread array, //add new properties to array]) */
  const [tasks, setTasks] = useState([]);

  /**
   * events are stored in top level component (App)
   */

  // useEffect hook with async/await fetch
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    //console.log(data)
    return data;
  };

  // Add Task
  const addTask = async (task) => {
    // request
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    // response
    const data = await res.json();

    setTasks([...tasks, data]);

    //console.log(task)
    // create random id
    /* const id = Math.floor(Math.random() * 10000) + 1
    console.log(id)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask]) */
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

    //console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    //console.log(data)
    return data;
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });

    const data = await res.json();

    //console.log(id)
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  // return JSX
  return (
    // JSX expression must have only one parent element
    <div className="container">
      <h1>React App</h1>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No more tasks"
      )}
    </div>
  );
}

// export component
export default App;
