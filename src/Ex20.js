//write a react program for task to do list.
//1. Add One input field and button..where by clicking on button it will display entered task on the same page.
//2. Also Add delete button with each added task that will delete that task as well.
import React, { useState } from 'react';

const Ex20 = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask!== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const task_list = [...tasks];
    task_list.splice(index, 1);
    setTasks(task_list);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter a new task..."/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}<button onClick={() => removeTask(index)}>Remove</button></li>
        )
        )}
      </ul>
    </div>
  );
};

export default Ex20;