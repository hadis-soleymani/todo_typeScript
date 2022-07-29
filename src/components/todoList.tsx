import React, { useContext } from "react";

//components
import TodoCard from "./todoCard";

//context
import { todoContext } from "../contexts/todoContextProvider";

//TodoList return a react function
const TodoList: React.FC = () => {
  //access to state of context
  //state is array of todo objects
  const { state } = useContext(todoContext);

  return (
    <div className="todos">
      {state.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
