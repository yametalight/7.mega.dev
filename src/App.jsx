import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
 const [todos, setTodos] = useState([]);
 const [input, setInput] = useState('');

 useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) setTodos(storedTodos);
 }, []);

 useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
 }, [todos]);

 const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
 };

 const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
 };

 const editTodo = (index, newValue) => {
    const newTodos = [...todos];
    newTodos[index] = newValue;
    setTodos(newTodos);
 };

 return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <form onSubmit={addTodo}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Ekle</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="text"
              value={todo}
              onChange={(e) => editTodo(index, e.target.value)}
            />
            <button onClick={() => deleteTodo(index)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
 );
}

export default App;
