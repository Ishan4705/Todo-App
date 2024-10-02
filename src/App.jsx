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


const numOfTasks=tasks.length;
const completedTasks=tasks.filter(task=>task.done).length;

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

function delTask(taskId) {
  setTasks(prev => {
    return prev.filter(task => task.id !== taskId); // Compare task.id with taskId directly
  });
}

function markAsDone(taskId, isDone) {
  setTasks(prev => {
    return prev.map(task => 
      task.id === taskId ? { ...task, done: isDone } : task
    );
  });
}

function message(){
  const percentageDone= (completedTasks/numOfTasks) * 100;
  if(percentageDone<=25){
    return 'Aim to do atleast a quater of Tasks🤞🏻'
  }
  if (percentageDone>25 && percentageDone<=50){
    return 'Keep going!!👍🏻'
  }
  if (percentageDone>50 && percentageDone!=100){
    return 'Going Good👏🏻'
  }
  if (percentageDone==100){
    return "🎉 Great job! You've completed all your tasks. Take a break or add new tasks to stay productive!";
  }
  
}

  return (
    <>
      <main>
        <h1>Todo List: Let's add some tasks!!</h1>
        <h2>{completedTasks}/{numOfTasks}{(completedTasks>=1)?' Completed':' Not a Single task Completed'}</h2>
        <h3>{message()}</h3>
        <TaskForm onAdd={addTask}/>
        {tasks.map(task=>(
          <Task key={task.id} {...task} 
                onDelete={()=>delTask(task.id)}
                onToggle={done =>markAsDone(task.id,done)}/>
        ))}
      </main>
    </>
  );
}

export default App;
