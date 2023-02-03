import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          value={input}
          name="text"
          className="todo"
          onChange={handleChange}
        />
        <button type="submit">New Task</button>
      </form>
    </div>
  );
}

export default Form;
