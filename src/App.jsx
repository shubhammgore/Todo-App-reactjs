import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    "Go to the gym.",
    "Eat more healthy food.",
    "Buy grocery.",
  ]);

  function handleAddTodos(newTodos) {
    const newTodoList = [...todos, newTodos]
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
