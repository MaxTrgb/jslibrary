import React, { useState, useCallback } from "react";
import './Todo.css';

const TodoCreate = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState(null);

    const addTaskHandler = useCallback(() => {
        if (title.trim().length < 3) {
            setTitleError("Error: Title must be at least 3 characters long");
            return;
        }
        addTask(title);
        setTitle("");
        setTitleError(null);
    }, [title, addTask]);

    return (
        <div className="addFieldButton">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') addTaskHandler();
                }}
            />
            <button onClick={addTaskHandler}>Add</button>
            {titleError && <div className="error">{titleError}</div>}
        </div>
    );
}

export default TodoCreate;