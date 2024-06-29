// src/TaskContext.js
import React, { createContext, useReducer, useEffect } from 'react';

const TaskContext = createContext();

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'addTask':
            return [...state, { id: Date.now(), text: action.text, completed: false }];
        case 'editTask':
            return state.map(task =>
                task.id === action.id ? { ...task, text: action.text } : task
            );
        case 'completeTask':
            return state.map(task =>
                task.id === action.id ? { ...task, completed: !task.completed } : task
            );
        case 'deleteTask':
            return state.filter(task => task.id !== action.id);
        default:
            return state;
    }
};

const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, initialState);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

export { TaskContext, TaskProvider };
