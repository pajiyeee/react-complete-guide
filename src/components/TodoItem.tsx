import React from "react";

const TodoItem: React.FC<{
  onRemoveItem: () => void;
  text: string;
}> = (props) => {
  return <li onClick={props.onRemoveItem}>{props.text}</li>;
};

export default TodoItem;
