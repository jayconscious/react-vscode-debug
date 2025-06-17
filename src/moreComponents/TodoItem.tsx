import React from 'react';

interface TodoItemProps {
  text: string;
  completed?: boolean;
  onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, completed = false, onToggle }) => {
  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '8px',
        margin: '4px 0',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        style={{ marginRight: '8px' }}
      />
      <span style={{ 
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? '#888' : '#000'
      }}>
        {text}
      </span>
    </div>
  );
};

export default TodoItem;