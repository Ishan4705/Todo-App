import { useEffect, useState } from 'react';
import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([]);

  const numOfTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.done).length;

  // Ensure localStorage is accessed only on the client-side
  useEffect(() => {
    if (typeof window === 'undefined') return; // Avoid localStorage usage during SSR
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks); // Only set tasks if savedTasks is not null
    }
  }, []);

  // Save tasks to localStorage when they change
  useEffect(() => {
    if (typeof window === 'undefined') return; // Avoid localStorage during SSR
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(name) {
    if (name.trim() === '') {
      return;
    }
    setTasks(prev => {
      return [...prev, { name: name, done: false, id: uuidv4() }];
    });
  }

  function delTask(taskId) {
    setTasks(prev => {
      return prev.filter(task => task.id !== taskId);
    });
  }

  function markAsDone(taskId, isDone) {
    setTasks(prev => {
      return prev.map(task =>
        task.id === taskId ? { ...task, done: isDone } : task
      );
    });
  }

  function renameTask(taskId, newName) {
    setTasks(prev => {
      return prev.map(task =>
        task.id === taskId ? { ...task, name: newName } : task
      );
    });
  }

  function message() {
    const percentageDone = (completedTasks / numOfTasks) * 100;
    if (percentageDone <= 25) {
      return 'Aim to do at least a quarter of Tasks🤞🏻';
    }
    if (percentageDone > 25 && percentageDone <= 50) {
      return 'Keep going!!👍🏻';
    }
    if (percentageDone > 50 && percentageDone !== 100) {
      return 'Going Good👏🏻';
    }
    if (percentageDone === 100) {
      return "🎉 Great job! You've completed all your tasks. Take a break or add new tasks to stay productive!";
    }
  }

  return (
    <>
      <main>
        <h1>Todo List: Let's make your day Productive!!</h1>
        <h2>{completedTasks}/{numOfTasks} {completedTasks >= 1 ? 'Completed' : 'Not a Single task Completed'}</h2>
        <h3>{message()}</h3>
        <TaskForm onAdd={addTask} />
        {tasks.map(task => (
          <Task
            key={task.id}
            {...task}
            onRename={newName => renameTask(task.id, newName)}
            onDelete={() => delTask(task.id)}
            onToggle={done => markAsDone(task.id, done)}
          />
        ))}
      </main>
    </>
  );
}

export default App;
