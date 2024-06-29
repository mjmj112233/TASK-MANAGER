// src/FilteredTaskList.js
import React, { useContext, useMemo, useState } from 'react';
import { TaskContext } from './TaskContext';

const FilteredTaskList = () => {
    const { tasks } = useContext(TaskContext);
    const [filter, setFilter] = useState('all');

    const filteredTasks = useMemo(() => {
        if (filter === 'completed') {
            return tasks.filter(task => task.completed);
        } else if (filter === 'incomplete') {
            return tasks.filter(task => !task.completed);
        }
        return tasks;
    }, [tasks, filter]);

    const getButtonStyle = (currentFilter) => ({
        opacity: filter === currentFilter ? 0.5 : 1,
    });

    return (
        <div>
            <div>
                <button
                    onClick={() => setFilter('all')}
                    style={getButtonStyle('all')}
                    disabled={filter === 'all'}
                >
                    All
                </button>
                <button
                    onClick={() => setFilter('completed')}
                    style={getButtonStyle('completed')}
                    disabled={filter === 'completed'}
                >
                    Completed
                </button>
                <button
                    onClick={() => setFilter('incomplete')}
                    style={getButtonStyle('incomplete')}
                    disabled={filter === 'incomplete'}
                >
                    Incomplete
                </button>
            </div>
            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id}>
                        <span>{task.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilteredTaskList;
