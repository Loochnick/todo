import React from 'react';

const Todo = ({ todo, task, toggleComplete, deleteTask, toggleEdit }) => {
  return (
    <div className='todo-container'>
      <p className={`${todo.completed ? "task-completed" : "task"}`}>{task}</p>
      <div>
        <button onClick={() => toggleComplete(todo.id)}>Done</button>
        <button onClick={() => deleteTask(todo.id)}>Delete</button>
        <button onClick={() => toggleEdit(todo.id)}>Edit</button>
      </div>
    </div>
  )
}

export default Todo;