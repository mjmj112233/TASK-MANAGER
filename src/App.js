// src/App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { AuthProvider } from './AuthContext';
import Header from './Header';
import { TaskProvider } from './TaskContext';
import TaskManager from './TaskManager';
import FilteredTaskList from './FilteredTaskList';
import './App.css';

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <div className="App" >
                    <Header />
                    <TaskProvider>
                        <div className="App">
                            <TaskManager />
                            <FilteredTaskList />
                        </div>
                    </TaskProvider>
                </div>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
