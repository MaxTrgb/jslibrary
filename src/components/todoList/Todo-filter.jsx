import React from 'react';
import './Todo.css';

const TodoFilter = () => {
    return (
        <div className="filter">
            <button>Todo</button>
            <button>Done</button>
            <button>All</button>
        </div>
    );
}

export default TodoFilter;
