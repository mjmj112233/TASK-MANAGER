import React, { useState, useCallback } from 'react';
import Button from './Button';

const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // Memoized callback to prevent unnecessary re-renders of Button
    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []); // No dependencies, so the function is only created once

    console.log('parent rendered');
    return (
        <div>
            <h2>To-Do</h2>
            <p>Count: {count}</p>
            <Button onClick={increment}>Increment Count</Button>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something"
            />
        </div>
    );
};

export default ParentComponent;