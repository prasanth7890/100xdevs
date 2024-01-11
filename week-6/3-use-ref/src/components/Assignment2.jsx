import React, { useState, useCallback, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const userefVar = useRef(0);
    const [render, forceRender] = useState(0);

    const handleReRender = () => {
        // Update state to force re-render
        forceRender(Math.random());
    };

    const increment = ()=> {
        userefVar.current = userefVar.current + 1;
    }

    return (
        <div>
            <p>This component has rendered {render} times.</p>
            <p>This component doesn't cause additional renders - {userefVar.current}</p>
            <button onClick={handleReRender}>Force Re-render</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
};