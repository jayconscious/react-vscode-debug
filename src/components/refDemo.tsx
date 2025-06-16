import React, { forwardRef, useRef, useImperativeHandle } from 'react';

// 定义子组件的 ref 类型
interface ChildRefType {
  focus: () => void;
  reset: () => void;
}

// 子组件
const ChildComponent = forwardRef<ChildRefType, { label: string }>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // 暴露给父组件的方法
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    reset: () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  }));

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder={props.label}
      />
    </div>
  );
});

// 父组件
const ParentComponent: React.FC = () => {
  const childRef = useRef<ChildRefType>(null);

  const handleFocus = () => {
    childRef.current?.focus();
  };

  const handleReset = () => {
    childRef.current?.reset();
  };

  return (
    <div>
      <h2>ForwardRef Demo</h2>
      <ChildComponent ref={childRef} label="请输入内容" />
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleFocus}>聚焦输入框</button>
        <button onClick={handleReset} style={{ marginLeft: '10px' }}>
          重置输入框
        </button>
      </div>
    </div>
  );
};

export default ParentComponent;