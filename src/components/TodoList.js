import React from "react";
import Todo from "./Todo";
import "./TodoList.css";
const TodoList = (props) => {
  let todolistFiltered = [];
  if (props.currentFilter === "all") {
    todolistFiltered = props.todolist;
  } else if (props.currentFilter === "completed") {
    todolistFiltered = props.todolist.filter((element) => {
      if (element.completed === true) return element;
    });
  } else {
    todolistFiltered = props.todolist.filter((element) => {
      if (element.completed === false) return element;
    });
  }
  return (
    <div>
      <h1>here is the todo list</h1>
      <ul className="todo-container">
        {todolistFiltered.map((element) => {
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
