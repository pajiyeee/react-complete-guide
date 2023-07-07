import React, { FormEvent, useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);
  const todoInputRef = useRef<HTMLInputElement>(null);

  const inputHandler = (event: FormEvent) => {
    event.preventDefault();
    const newTodoText = todoInputRef.current!.value;
    if (newTodoText.trim().length === 0) {
      return;
    } else {
      todosCtx.addTodo(newTodoText);
    }
  };

  return (
    <form onSubmit={inputHandler}>
      <label htmlFor="text">Write Todo!</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
