import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";
function App() {
  const [todoListItems, setTodoListItems] = useState([]);

  const inputValHandler = (input) => {
    setTodoListItems([
      ...todoListItems,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
  };
  console.log("function rerendered");
  console.log(todoListItems);

  return (
    <div>
      <header>
        <h1>Your Todo list</h1>
      </header>
      <Form onInputGiven={inputValHandler}></Form>
      <TodoList todolist={todoListItems} setTodos={setTodoListItems} />
    </div>
  );
}

export default App;
