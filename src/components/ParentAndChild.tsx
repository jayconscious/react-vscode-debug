import React, { useState, useRef, useEffect } from "react";

export default function Parent() {
    console.log('Parent render');
    useEffect(() => {
      console.log('Parent useEffect');
      return () => console.log('Parent cleanup');
    }, []);
  
    return (
      <div>
        <Child />
        <Child />
      </div>
    );
  }
  
  function Child() {
    console.log('Child render');
    useEffect(() => {
      console.log('Child useEffect');
      return () => console.log('Child cleanup');
    }, []);
  
    return <div>Child</div>;
  }
  
  // 挂载时输出顺序:
  // Parent render
  // Child render
  // Child render
  // Child useEffect
  // Child useEffect
  // Parent useEffect