// CursorDot.js
import React, { useState, useEffect } from 'react';

const CursorDot = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.pageX, y: event.pageY });
        };

        // Add mouse move event listener
        window.addEventListener('mousemove', handleMouseMove);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="cursor-dot"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transition: 'left 0.1s, top 0.1s' // Optional: smooth movement
            }}
        />
    );
};

export default CursorDot;
