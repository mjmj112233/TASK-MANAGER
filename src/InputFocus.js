// src/InputFocus.js
import React, {useRef, useState} from 'react';

const InputFocus = () => {
    const inputRef = useRef(null);
    const [val, setVal] = useState(null);

    const handleButtonClick = () => {
        inputRef.current.focus();
        setVal(inputRef.current.value);
    };

    return (
        <div>
            <h2>Focus Input Field Example {val}</h2>
            <input ref={inputRef} type="text" placeholder="Click the button to focus" />
            <button onClick={handleButtonClick}>Focus the input</button>
        </div>
    );
};

export default InputFocus;