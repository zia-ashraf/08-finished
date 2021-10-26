import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputVal, setInputVal] = useState("");

  const inputValHandler = (input) => {
    setInputVal(input);
  };
  console.log(inputVal);
  console.log("function rerendered");

  return (
    <div>
      <header>
        <h1>Your Todo list</h1>
      </header>
      <Form onInputGiven={inputValHandler}></Form>
      <TodoList />
    </div>
  );
}

export default App;
