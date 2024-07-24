import React, { useState, useCallback } from 'react';
import './Todo.css';
import classNames from 'classnames';

const TodoItem = ({ task, deleteTask, toggleComplete, updateTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);

    const saveClickHandler = useCallback(() => {
        if (title.trim().length < 3) {
            return;
        }
        setIsEditing(false);
        updateTask(task.id, title);
    }, [title, updateTask, task.id]);

    const normalTemplate = (
        <>
            <div>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                />
                <span className={classNames('task-title', { 'completed': task.completed })} onClick={() => setIsEditing(true)}>{task.title}</span>
            </div>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
    );

    const editTemplate = (
        <>
            <input type="checkbox" disabled />
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <button onClick={saveClickHandler}>Save</button>
        </>
    );

    return (
        <div className="task-item">
            {isEditing ? editTemplate : normalTemplate}
        </div>
    );
}

export default TodoItem;