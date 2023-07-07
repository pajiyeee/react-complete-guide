import React, { useState } from "react";
import Todo from "../models/Todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

type TodoContextChildrenObj = {
  children: React.ReactNode;
};

export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<TodoContextChildrenObj> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (newText: string) => {
    const newTodo = new Todo(newText);

    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const removeItemHandler = (itemId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== itemId));
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeItemHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
