import React from 'react';
import Todo from './Todo';
import TodoEdit from './TodoEdit';

const TodoList = ({ todos, setTodos }) => {
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ?
      { ...todo, completed: !todo.completed } :
      todo)
    );
  }

  const toggleEdit = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ?
      { ...todo, editing: !todo.editing } :
      todo)
    );
  }

  const editTask = (task, id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ?
      { ...todo, task, editing: !todo.editing } :
      todo
    ));
  }

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      {todos.map((todo) => (
        todo.editing ?
        <TodoEdit
          key={todo.id}
          task={todo}
          editTask={editTask}
        /> :
        <Todo
          key={todo.id}
          todo={todo}
          task={todo.task}
          toggleComplete={toggleComplete}
          toggleEdit={toggleEdit}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  )
}

export default TodoList;