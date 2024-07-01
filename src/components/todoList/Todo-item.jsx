import React from 'react';
import './Todo.css';

const TodoItem = ({ task }) => {
    return (
        <div className="task-item">
            <div>
                <input type="checkbox" defaultChecked={task.completed} />
                <span>{task.title}</span>
            </div>

            <button>Delete</button>
        </div>
    );
}

export default TodoItem;
