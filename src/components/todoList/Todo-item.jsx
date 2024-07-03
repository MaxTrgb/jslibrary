import React, { useState } from 'react';
import './Todo.css';

const TodoItem = ({ task, deleteTask, toggleComplete, updateTask }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);

    const saveClickHandler = () => {
        if (title.trim().length < 3) {
            return;
        }
        setIsEditing(false);
        updateTask(task.id, title);
    }

    const normalTemplate = <>
        <div>
            <input
                type="checkbox"
                defaultChecked={task.completed}
                onChange={() => toggleComplete(task.id)}
            />
            <span className={task.completed ? "completed" : ""} onClick={()=>setIsEditing(true)}>{task.title}</span>
        </div>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
    </>

    const editTemplate = <>
        <input type="checkbox" disabled/>
        <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
        <button onClick={saveClickHandler}>Save</button>
    </>
    return (
        <div className="task-item">
            {isEditing? editTemplate : normalTemplate}
        </div>
    );
}

export default TodoItem;
