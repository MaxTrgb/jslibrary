import React, { useState } from "react";
import './Todo.css';

const TodoCreate = ({addTask}) => {
    const [title, setTitle] = useState('');

    const addTaskHandler = () => {
        addTask();        
    };

    return (
        <div className="addFieldButton">
            <input type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={addTaskHandler}>Add</button>
        </div>
    )
}
export default TodoCreate;