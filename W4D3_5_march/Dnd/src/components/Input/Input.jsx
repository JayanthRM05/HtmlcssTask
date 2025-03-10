import { useState } from "react";
import React from 'react';
import "./Input.css";

export const Input = ({ onSubmit }) => {  // Destructure onSubmit from props
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        if (!input) return;
        onSubmit(input); // Now onSubmit is correctly passed as a prop
        setInput("");
    };

    return (
        <div className="container">
            <input
                type="text"
                className="input"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button onClick={handleSubmit} className="button">Add</button>
        </div>
    );
};
