import React, { useState, useCallback, memo, useMemo } from 'react';

interface ExpensiveComponentProps {
  onClick: () => void;
  data: string;
}

// useMemo 和 memo 的区别
// useMemo 是用来缓存计算结果的， memo 是用来缓存组件的

// 使用 memo 包装的子组件
const ExpensiveComponent = memo(({ onClick, data }: ExpensiveComponentProps) => {
  console.log('ExpensiveComponent rendered');
  // console.log('data', data)
  return (
    <div>
      <p>Data: {data}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
});

const UseCallbackDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // 使用 useCallback 缓存回调函数
  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setCount(c => c + 1);
  }, []); // 空依赖数组，因为这个回调不依赖任何外部变量

  // 依赖外部变量的回调函数
  const handleTextChange = useCallback((newText: string) => {
    setText(newText);
  }, []); 
  // 空依赖数组，因为 setText 是稳定的


  // 依赖 count 的回调函数
  const handleCountChange = useCallback(() => {
    console.log(`Current count is: ${count}`);
  }, [count]); 
  // 依赖 count，当 count 变化时会重新创建

  return (
    <div style={{ padding: '20px' }}>
      <h2>useCallback Demo</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Basic Counter</h3>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Text Input</h3>
        <input
          type="text"
          value={text}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder="Type something..."
        />
        <p>Current text: {text}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Memoized Component</h3>
        <ExpensiveComponent
          onClick={handleClick}
          data={`Count is ${count}`}
        />
      </div>

      <div>
        <h3>Dependent Callback</h3>
        <button onClick={handleCountChange}>
          Log Current Count
        </button>
      </div>
    </div>
  );
};

export default UseCallbackDemo; 