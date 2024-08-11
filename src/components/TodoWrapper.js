import React, {useState, useEffect} from 'react';
import Form from './Form';
import TodoList from './TodoList';

const TodoWrapper = () => {
  const initialState = JSON.parse(localStorage.getItem('todos'));
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState(initialState);
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Form value={value} setValue={setValue} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default TodoWrapper;