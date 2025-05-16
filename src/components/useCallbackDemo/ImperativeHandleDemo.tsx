import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';

// 定义子组件接收的 props 类型
interface ChildProps {
    initialValue?: number;
}

// 定义子组件暴露给父组件的方法类型
export interface ChildRef {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    getValue: () => number;
}

// 使用 forwardRef 包装子组件，明确指定 ref 类型
const ChildComponent = forwardRef<ChildRef, ChildProps>((props, ref) => {
    const [count, setCount] = useState(props.initialValue || 0);

    // 使用 useImperativeHandle 自定义暴露给父组件的方法
    useImperativeHandle(ref, () => ({
        increment: () => {
            setCount(c => c + 1);
            console.log('子组件内部执行 increment');
        },
        decrement: () => {
            setCount(c => c - 1);
            console.log('子组件内部执行 decrement');
        },
        reset: () => {
            setCount(props.initialValue || 0);
            console.log('子组件内部执行 reset');
        },
        getValue: () => {
            console.log('子组件内部执行 getValue');
            return count;
        }
    }), [props.initialValue]); // 依赖项

    return (
        <div style={{ 
            padding: '20px', 
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '20px'
        }}>
            <h3>子组件</h3>
            <p>当前计数: {count}</p>
        </div>
    );
});

// 父组件
const ImperativeHandleDemo: React.FC = () => {
    // 创建 ref 来引用子组件，明确指定类型
    const childRef = useRef<ChildRef>(null);
    const [parentCount, setParentCount] = useState(0);

    // 父组件中调用子组件方法的函数
    const handleIncrement = () => {
        if (childRef.current) {
            childRef.current.increment();
        }
    };

    const handleDecrement = () => {
        if (childRef.current) {
            childRef.current.decrement();
        }
    };

    const handleReset = () => {
        if (childRef.current) {
            childRef.current.reset();
        }
    };

    const handleGetValue = () => {
        if (childRef.current) {
            const value = childRef.current.getValue();
            setParentCount(value);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>useImperativeHandle 示例</h2>
            
            <div style={{ marginBottom: '20px' }}>
                <h3>父组件</h3>
                <p>从子组件获取的计数: {parentCount}</p>
                <div style={{ marginTop: '10px' }}>
                    <button 
                        onClick={handleIncrement}
                        style={{ marginRight: '10px' }}
                    >
                        增加子组件计数
                    </button>
                    <button 
                        onClick={handleDecrement}
                        style={{ marginRight: '10px' }}
                    >
                        减少子组件计数
                    </button>
                    <button 
                        onClick={handleReset}
                        style={{ marginRight: '10px' }}
                    >
                        重置子组件计数
                    </button>
                    <button onClick={handleGetValue}>
                        获取子组件计数
                    </button>
                </div>
            </div>

            {/* 渲染子组件并传递 ref */}
            <ChildComponent ref={childRef} initialValue={0} />

            <div style={{ 
                padding: '10px', 
                backgroundColor: '#f8f9fa',
                borderRadius: '4px'
            }}>
                <h3>说明:</h3>
                <ul>
                    <li>useImperativeHandle 用于自定义暴露给父组件的实例值</li>
                    <li>父组件可以通过 ref 调用子组件暴露的方法</li>
                    <li>子组件可以控制哪些方法可以被父组件访问</li>
                    <li>这种方式可以避免直接暴露子组件的内部状态</li>
                </ul>
            </div>
        </div>
    );
};

export default ImperativeHandleDemo; 