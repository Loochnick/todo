import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({value, setValue, todos, setTodos}) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    if(value.trim() !== "") { 
      e.preventDefault();
      setTodos([...todos, {id: uuidv4(), task: value, completed: false, editing: false}]);
      setValue('');
    } else {
      e.preventDefault();
    }
  }

  return (
    <div>
      <h1>Get Things Done!</h1>
      <form className='form-container' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='What is the task?'
          value={value}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default Form;