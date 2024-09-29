import { useState } from "react";

export default function TaskForm({onAdd}) {
    const [taskName,setTaskName]= useState('');
    function handleSubmit(event){
        event.preventDefault(); // so it doesn't send by default with
        // HTML and can able to send the separate request
        onAdd(taskName);
        setTaskName('');
    }
    return(
        <form onSubmit={handleSubmit}>
          <input type="text"
                placeholder="New Task..." 
                value={taskName} 
                onChange={event=>setTaskName(event.target.value)}/>
          <button>+</button>
        </form>
    );
}