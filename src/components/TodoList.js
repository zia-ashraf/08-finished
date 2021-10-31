import React from "react";
import Todo from "./Todo";
import "./TodoList.css";
const TodoList = (props) => {
  return (
    <div>
      <h1>here is the todo list</h1>
      <ul className="todo-container">
        {props.todolist.map((element) => {
          // return <li>{element.text}</li>;
          return (
            <Todo
              text={element.text}
              id={element.id}
              completed={element.completed}
              setTodos={props.setTodos}
              allTodo={props.todolist}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
