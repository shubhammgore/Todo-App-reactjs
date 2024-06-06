import { useState } from "react";

const TodoInput = (props) => {
  const { handleAddTodos } = props;

  const [todoValue, setTodoValue] = useState('');

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value)
        }}
        placeholder="Enter task..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue('') // For resetting empty input 
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
