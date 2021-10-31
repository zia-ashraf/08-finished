import "./Todo.css";
const Todo = (props) => {
  const deleteHandler = () => {
    const newArray = props.allTodo.filter((item) => item.id !== props.id);
    props.setTodos(newArray);
  };

  const completedHandler = () => {
    props.setTodos(
      props.allTodo.map((item) => {
        if (item.id === props.id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`text ${props.completed ? "completed" : ""}`}>
        <h1>{props.text}</h1>
      </li>

      <button className="edit-btn" onClick={completedHandler}>
        <i className="fas fa-check-circle"></i>
      </button>
      <button className="delete-btn" onClick={deleteHandler}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};
export default Todo;
