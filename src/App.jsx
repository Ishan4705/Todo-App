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
  setTasks(prev=>{
    return [...prev, {name:name,done:false}];
  });
}
  return (
    <>
      <main>
        <TaskForm onAdd={addTask}/>
        {tasks.map(task=>(
          <Task {...task}/>
        ))}
      </main>
    </>
  );
}

export default App;
