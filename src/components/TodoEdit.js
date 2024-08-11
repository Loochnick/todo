import React, {useState} from 'react';

const TodoEdit = ({ task, editTask }) => {
  const [value, setValue] = useState(task.task);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    if(value.trim() !== "") {
      e.preventDefault();
      editTask(value, task.id);
    } else {
      e.preventDefault();
      editTask(task.task, task.id);
    }
  }

  return (
    <div>
      <form className='edit-container' onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={handleChange}
        />
        <button>Save</button>
      </form>
    </div>
  )
}

export default TodoEdit;