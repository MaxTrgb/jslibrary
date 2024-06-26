import React, { useState } from "react";
import './Todo.css';

const TodoCreate = ({addTask}) => {
    const [title, setTitle] = useState('');

    const addTaskHandler = () => {
        addTask();        
    };

    return (
        <div>
            <input type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={addTaskHandler}>add</button>
        </div>
    )
}
export default TodoCreate;