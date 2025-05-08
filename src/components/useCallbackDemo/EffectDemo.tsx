import React, { useState, useLayoutEffect, useEffect } from 'react';

const EffectDemo: React.FC = () => {
    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    // 使用 useLayoutEffect 在 DOM 更新前同步执行
    useLayoutEffect(() => {
        console.log('useLayoutEffect 执行');
        const element = document.getElementById('measure-box');
        if (element) {
            const { width, height } = element.getBoundingClientRect();
            setWidth(width);
            setHeight(height);
            console.log('useLayoutEffect - 元素尺寸:', width, height);
        }
    }, [count]);

    // 使用 useEffect 在 DOM 更新后异步执行
    useEffect(() => {
        console.log('useEffect 执行');
        const element = document.getElementById('measure-box');
        if (element) {
            const { width, height } = element.getBoundingClientRect();
            console.log('useEffect - 元素尺寸:', width, height);
        }
    }, [count]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>useLayoutEffect vs useEffect 示例</h2>
            
            <div style={{ marginBottom: '20px' }}>
                <h3>当前计数: {count}</h3>
                <button onClick={() => setCount(c => c + 1)}>
                    增加计数
                </button>
            </div>

            <div 
                id="measure-box"
                style={{
                    padding: '20px',
                    border: '1px solid #ccc',
                    marginBottom: '20px',
                    backgroundColor: count % 2 === 0 ? '#f0f0f0' : '#e0e0e0',
                    transition: 'background-color 0.3s'
                }}
            >
                <h3>测量区域</h3>
                <p>这个区域会在计数变化时改变背景色</p>
                <p>当前尺寸:</p>
                <ul>
                    <li>宽度: {width.toFixed(2)}px</li>
                    <li>高度: {height.toFixed(2)}px</li>
                </ul>
            </div>

            <div style={{ 
                padding: '10px', 
                backgroundColor: '#f8f9fa',
                borderRadius: '4px'
            }}>
                <h3>执行顺序说明:</h3>
                <ol>
                    <li>点击按钮增加计数</li>
                    <li>useLayoutEffect 在 DOM 更新前同步执行</li>
                    <li>DOM 更新</li>
                    <li>useEffect 在 DOM 更新后异步执行</li>
                </ol>
                <p>注意观察控制台输出的执行顺序</p>
            </div>
        </div>
    );
};

export default EffectDemo; 