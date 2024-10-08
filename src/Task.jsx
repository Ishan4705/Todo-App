import { useState } from "react";
import CheckBox from "./CheckBox";

export default function Task({ name, done, onToggle, onDelete, onRename }) {
    const [editMode, setEditMode] = useState(false);
    const [newName, setNewName] = useState(name); // Local state for editing

    return (
        <div className={'task ' + (done ? 'done' : '' )}>
            <CheckBox checked={done} onClick={() => onToggle(!done)} />
            
            {!editMode && (
                <div className="task-name" onClick={() => setEditMode(true)}> 
                    <span>{name}</span>
                </div>
            )}

            {editMode && (
                <form 
                    onSubmit={event => {
                        event.preventDefault();
                        if (newName.trim() === "") {
                            alert("Task name cannot be empty!"); // Show an alert if the new name is empty
                            return;
                        }
                        onRename(newName.trim()); // Call the rename function with the trimmed new name
                        setEditMode(false); // Exit edit mode
                    }}
                >
                    <input 
                        type="text" 
                        value={newName} 
                        onChange={event => setNewName(event.target.value)} // Update local state
                        onBlur={() => {
                            if (newName.trim() !== "") {
                                onRename(newName.trim()); // Save only if not empty
                            }
                            setEditMode(false);
                        }} 
                        autoFocus // Focus input when edit mode is active
                    />
                </form>
            )}

            <button className="trash" onClick={onDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                </svg>
            </button>
        </div>
    );
}
