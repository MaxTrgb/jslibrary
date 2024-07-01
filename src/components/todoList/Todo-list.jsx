import React, { useState } from "react";
import "./Todo.css";
import TodoCreate from "./Todo-create";
import TodoFilter from "./Todo-filter";
import TodoItem from "./Todo-item";
import { taskList } from "./taskList";


const TodoList = () => {
    const [task, setTasks] = useState(taskList);

    const addTask = () => {
        alert("add task");
    };

    return (
        <div className="todoContainer">
            <div className="todo">
                <h1>Todo List</h1>
                <TodoCreate addTask={addTask} />
                <div>
                    <TodoFilter />
                    <div className="list">
                        {taskList.map(task => (
                            <TodoItem
                                key={task.id}
                                task={task}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default TodoList;