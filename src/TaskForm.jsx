import { useState } from "react";

export default function TaskForm() {
    const [taskName,setTaskName]= useState('');
    return(
        <form>
          <input type="text"
                placeholder="New Task..." 
                value={taskName} 
                onChange={event=>setTaskName(event.target.value)}/>
          <button>+</button>
        </form>
    );
}