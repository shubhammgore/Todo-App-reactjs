const TodoCard = (props) => {
    const {children} = props
  return (
    <li className="todoItem">
        {children}
      <div className="actionsContainer">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-regular fa-trash-can"></i>
      </div>
    </li>
  );
};

export default TodoCard;