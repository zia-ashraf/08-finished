import "./Todo.css";
const Todo = (props) => {
  const deleteHandler = () => {
    const newArray = props.allTodo.filter((item) => item.id !== props.id);
    props.setTodos(newArray);
  };

  const completedHandler = () => {};
  return (
    <div className="todo">
      <li className="text">
        <h1>{props.text}</h1>
      </li>

      <button className="edit-btn">
        <i className="fas fa-check-circle"></i>
      </button>
      <button className="delete-btn" onClick={deleteHandler}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};
export default Todo;
