import React, { useState, useRef, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    // const handleClick = () => {
    //   setTimeout(() => {
    //     setCount(count + 1);
    //   }, 1000);
    // };
    
    const handleClick = () => {
        setTimeout(() => {
            setCount(count => count + 1);
        }, 1000);
    };
    
    const handleReset = () => {
      setCount(0);
    };
    
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
}
