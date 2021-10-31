import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";
function App() {
  const [todoListItems, setTodoListItems] = useState([]);
  const [filterSelected, setFilterSelected] = useState("all");
  const inputValHandler = (input) => {
    setTodoListItems([
      ...todoListItems,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
  };
  useEffect(() => {
    getFromLocalStorage();
  }, []);
  useEffect(() => {
    savetoLocalStorage();
  }, [todoListItems]);
  const savetoLocalStorage = () => {
    localStorage.setItem("todo", JSON.stringify(todoListItems));
  };
  const getFromLocalStorage = () => {
    if (localStorage.getItem("todo" === null)) {
      localStorage.setItem("todo", JSON.stringify([]));
    } else {
      const localTodo = localStorage.getItem("todo");
      setTodoListItems(JSON.parse(localTodo));
    }
  };
  console.log("function rerendered");
  // console.log(todoListItems);

  return (
    <div>
      <header>
        <h1>Your Todo list</h1>
      </header>
      <Form
        onInputGiven={inputValHandler}
        currentFilter={setFilterSelected}
      ></Form>
      <TodoList
        todolist={todoListItems}
        setTodos={setTodoListItems}
        currentFilter={filterSelected}
      />
    </div>
  );
}

export default App;
