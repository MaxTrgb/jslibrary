import React, { useState, useReducer, useEffect } from "react";
import { taskList } from "./taskList";
import TodoCreate from "./Todo-create";
import TodoFilter from "./Todo-filter";
import TodoItem from "./Todo-item";
import todoReducer from "../../reducers/todoReducer";
import TodoLogo from "./Todo-logo";
import "./Todo.css";


const TodoList = () => {
    const [tasks, dispatch] = useReducer(todoReducer, taskList);
    const [currentFilter, setCurrentFilter] = useState('All');

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            dispatch({ type: 'SET_TASKS', payload: JSON.parse(storedTasks) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (title) => {
        dispatch({ type: 'ADD_TASK', payload: { title: title } });
    };
    const deleteTask = (id) => {
        dispatch({ type: 'DELETE_TASK', payload: { id: id } });
    };
    const toggleComplete = (id) => {
        dispatch({ type: 'TOGGLE_COMPLETE', payload: { id: id } });
    }
    const updateTask = (id, newTitle) => {
        dispatch({ type: 'UPDATE_TASK', payload: { id: id, newTitle: newTitle } });
    }
    const filterMap = {
        All: () => true,
        Todo: task => !task.completed,
        Done: task => task.completed
    }
    return (
        <div className="todoContainer">
            <div className="todo">
                <TodoLogo />
                <TodoCreate addTask={addTask} />
                <div>
                    <TodoFilter
                        setCurrentFilter={setCurrentFilter}
                        currentFilter={currentFilter}
                        filterMap={filterMap}
                    />
                    <div className="list">
                        {tasks.filter(filterMap[currentFilter]).map(task => (
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