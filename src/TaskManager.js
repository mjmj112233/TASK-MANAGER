// src/TaskManager.js
import React, { useState, useContext, useRef, useCallback } from 'react';
import { TaskContext } from './TaskContext';

const TaskManager = () => {
    const [newTask, setNewTask] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const { tasks, dispatch } = useContext(TaskContext);
    const inputRef = useRef(null);

    const addOrEditTask = useCallback(() => {
        if (newTask.trim()) {
            if (editingTaskId) {
                dispatch({ type: 'editTask', id: editingTaskId, text: newTask });
                setEditingTaskId(null);
            } else {
                dispatch({ type: 'addTask', text: newTask });
            }
            setNewTask('');
            inputRef.current.focus();
        }
    }, [newTask, editingTaskId, dispatch]);

    const toggleComplete = useCallback((id) => {
        dispatch({ type: 'completeTask', id });
    }, [dispatch]);

    const startEditing = useCallback((task) => {
        setNewTask(task.text);
        setEditingTaskId(task.id);
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter your task"
                className='taskField'
            />
            <button onClick={addOrEditTask}>{editingTaskId ? 'Edit Task' : 'Add Task'}</button>
            <ul style={{ listStyle: 'none' }}>
                {tasks.map((task, index) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleComplete(task.id)}
                        />
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            Task {index + 1}: {task.text}
                        </span>
                        <button onClick={() => startEditing(task)}>Edit</button>
                        <button onClick={() => dispatch({ type: 'deleteTask', id: task.id })}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;
