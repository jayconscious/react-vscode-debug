import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

export default function Parent() {
    console.log('Parent render');

    useLayoutEffect(() => {
      console.log('Parent useLayoutEffect cb');
      return () => console.log('Parent useLayoutEffect cleanup');
    }, []);
    
    useEffect(() => {
      console.log('Parent useEffect cb');
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

    useLayoutEffect(() => {
      console.log('Child useLayoutEffect cb');
      return () => console.log('Child useLayoutEffect cleanup');
    }, []);

    useEffect(() => {
      console.log('Child useEffect cb');
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