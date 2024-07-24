import React, { useState, useReducer, useEffect, useCallback, useMemo } from "react";
import { taskList } from "./taskList";
import { actionTypes } from "../../reducers/todoReducer";
import todoReducer from "../../reducers/todoReducer";
import TodoCreate from "./Todo-create";
import TodoFilter from "./Todo-filter";
import TodoItem from "./Todo-item";
import TodoLogo from "./Todo-logo";
import "./Todo.css";


const initializeTasks = () => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : taskList;
}

const TodoList = () => {
    const [tasks, dispatch] = useReducer(todoReducer, [], initializeTasks);
    const [currentFilter, setCurrentFilter] = useState('All');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = useCallback((title) => {
        dispatch({ type: actionTypes.ADD_TASK, payload: { title } });
    }, []);
    const deleteTask = useCallback((id) => {
        dispatch({ type: actionTypes.DELETE_TASK, payload: { id } });
    }, []);
    const toggleComplete = useCallback((id) => {
        dispatch({ type: actionTypes.TOGGLE_COMPLETE, payload: { id } });
    }, []);

    const updateTask = useCallback((id, newTitle) => {
        dispatch({ type: actionTypes.UPDATE_TASK, payload: { id, newTitle } });
    }, []);
    const filterMap = useMemo(() => ({
        All: () => true,
        Todo: task => !task.completed,
        Done: task => task.completed,
    }), []);
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
