// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Task from './Task';
import TaskForm from './TaskForm';

function App() {


  return (
    <>
      <main>
        <TaskForm/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </main>
    </>
  );
}

export default App;
