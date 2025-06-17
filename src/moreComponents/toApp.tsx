import { useState } from "react";
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim()) {
      setTodos(prevTodos => [
        ...prevTodos,
        {
          id: Date.now(),
          text: inputText.trim(),
          completed: false
        }
      ]);
      setInputText('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="添加新待办事项"
          style={{ padding: '8px', marginRight: '8px' }}
        />
        <button onClick={addTodo}>添加</button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value as 'all' | 'active' | 'completed')}
        >
          <option value="all">全部</option>
          <option value="active">未完成</option>
          <option value="completed">已完成</option>
        </select>
      </div>

      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggle={() => toggleTodo(todo.id)}
        />
      ))}
      
      <div style={{ marginTop: '20px' }}>
        总计: {todos.length} 项
      </div>
    </div>
  );
}
