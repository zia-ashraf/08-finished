import React, { useRef } from "react";

import "./Form.css";

const Form = (props) => {
  const inputGiven = useRef("");
  const inputSubmissionHandler = (event) => {
    event.preventDefault();
    props.onInputGiven(inputGiven.current.value);
  };

  return (
    <form className="form">
      <div className="input">
        <input ref={inputGiven} className="input-todo"></input>
        <button className="input-button" onClick={inputSubmissionHandler} />
      </div>
      <input className="filter"></input>
    </form>
  );
};

export default Form;
