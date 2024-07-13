'use client'
import React from 'react';

const Button = () => {
    const handleEvent = () => {
        console.log('handle event');
    }
    return (
        <button onClick={handleEvent} className="btn btn-neutral">Neutral</button>
    );
};

export default Button;