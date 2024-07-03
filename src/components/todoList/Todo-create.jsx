import React, { useState } from "react";
import './Todo.css';

const TodoCreate = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState(null);

    const addTaskHandler = () => {
        if (title.trim().length < 3) {
            return setTitleError("Error");
        }
        addTask(title);
        setTitle("");
        setTitleError(null);
    };

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
    )
}
export default TodoCreate;