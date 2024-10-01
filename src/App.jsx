// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import Task from './Task';
import TaskForm from './TaskForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
const [tasks,setTasks]=useState([]);
function addTask (name) {
  if (name.trim() === "") { // .trim function use to remove trailing and leading spaces from the input string
    return;
  }
  setTasks(prev=>{
    return [...prev, {name:name,done:false,id:uuidv4()}];
  });
}
  return (
    <>
      <main>
        <TaskForm onAdd={addTask}/>
        {tasks.map(task=>(
          <Task key={task.id} {...task}/>
        ))}
      </main>
    </>
  );
}

export default App;
