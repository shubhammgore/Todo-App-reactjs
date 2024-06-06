const TodoCard = (props) => {
  const { children, handleDeleteTodo, index } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button>
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
            handleDeleteTodo(index)
        }} >
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
