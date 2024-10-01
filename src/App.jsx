// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react';
import './App.css'
import Task from './Task';
import TaskForm from './TaskForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
const [tasks,setTasks]=useState([]);

useEffect(()=>{
  if(tasks.length===0) return;
  localStorage.setItem('tasks',JSON.stringify(tasks));
},[tasks]);

useEffect(()=>{
const savedTasks= JSON.parse(localStorage.getItem('tasks'));
if (savedTasks) {
  setTasks(savedTasks); // Only set tasks if savedTasks is not null
}
},[]);

function addTask (name) {
  if (name.trim() === "") { // .trim function use to remove trailing and leading spaces from the input string
    return;
  }
  setTasks(prev=>{
    return [...prev, {name:name,done:false,id:uuidv4()}];
  });
}

function markAsDone(taskId, isDone) {
  setTasks(prev => {
    return prev.map(task => 
      task.id === taskId ? { ...task, done: isDone } : task
    );
  });
}

  return (
    <>
      <main>
        <TaskForm onAdd={addTask}/>
        {tasks.map(task=>(
          <Task key={task.id} {...task} 
                onToggle={done =>markAsDone(task.id,done)}/>
        ))}
      </main>
    </>
  );
}

export default App;
