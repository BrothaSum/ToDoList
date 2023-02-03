import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Form from "./Form";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  /* const onChange = useCallback(
    (id, value) => {
      setItems(
        items.map((item, index) => {
          return index !== id ? item : { value: value };
        })
      );
    },
    [items]
  ); */

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div>
      <div className="row">
        <h2 className="item" key={todo.id}>
          {todo.text}
        </h2>
        <div className="Icons">
          <FontAwesomeIcon
            className="icon"
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            icon={faEdit}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="icon"
            onClick={() => removeTodo(todo.id)}
            icon={faTrashCan}
          ></FontAwesomeIcon>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  ));
}
export default Todo;
