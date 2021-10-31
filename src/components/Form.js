import React, { useRef } from "react";

import "./Form.css";

const Form = (props) => {
  // const [inputVal, setInputVal] = useState("");
  const inputGiven = useRef("");
  const inputSubmissionHandler = (event) => {
    event.preventDefault();
    // setInputVal(inputGiven.current.value);
    if (inputGiven.current.value === "") {
      alert("please don't enter an empty note");
      return;
    }
    props.onInputGiven(inputGiven.current.value);
    inputGiven.current.value = "";
  };
  const setFilterHandler = (e) => {
    console.log(e.target.value);
    props.currentFilter(e.target.value);
  };

  return (
    <form className="form">
      <div className="input">
        <input ref={inputGiven} className="input-todo"></input>
        <button className="input-button" onClick={inputSubmissionHandler} />
      </div>
      <select onChange={setFilterHandler} className="options">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  );
};

export default Form;
