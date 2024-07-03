import React, { useState } from "react";
import "./Todo.css";
import TodoCreate from "./Todo-create";
import TodoFilter from "./Todo-filter";
import TodoItem from "./Todo-item";
import { taskList } from "./taskList";


const TodoList = () => {
    const [tasks, setTasks] = useState(taskList);

    const addTask = (title) => {
        setTasks([...tasks,
        {
            id: tasks.length + 1,
            title: title,
            completed: false
        }]);
    };
    const deleteTask = (id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    };

    const toggleComplete = (id) => {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                }

            }
            return task;
        });

        setTasks(newTasks);
    }
    const updateTask = (id, newTitle) =>{
        const newTasks = tasks.map(task =>{
            if(task.id === id){
                return{
                    ...task,
                    title: newTitle
                }
            }
            return task;
        })

        setTasks(newTasks);
    }
    return (
        <div className="todoContainer">
            <div className="todo">
                <div className="logo">
                    <img src="https://cdn-icons-png.freepik.com/256/8476/8476658.png?semt=ais_hybrid" alt="" />
                    <h1>Todo List</h1>
                </div>
                <TodoCreate addTask={addTask} />
                <div>
                    <TodoFilter />
                    <div className="list">
                        {tasks.map(task => (
                            <TodoItem
                                key={task.id}
                                task={task}
                                deleteTask={deleteTask}
                                toggleComplete={toggleComplete}
                                updateTask={updateTask}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default TodoList;