import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete Lab 11', isCompleted: false },
    { id: 2, text: 'Review JSX Events and State', isCompleted: false }
  ]);
  const [inputText, setInputText] = useState('');

  const toggleComplete = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      setTodos([...todos, { id: todos.length + 1, text: inputText, isCompleted: false }]);
      setInputText('');
    }
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <form onSubmit={addTodo}>
        <input type="text" value={inputText} onChange={handleInputChange} placeholder="Add a new task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => toggleComplete(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
