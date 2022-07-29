import React,{useContext} from "react";
import { Task } from "../model";
import TodoCard from "./todoCard";
import {todoContext} from '../contexts/todoContextProvider'



const TodoList: React.FC = () => {
  const { state, dispatch } = useContext(todoContext);
  console.log('state:',state)
  return (
    <div className="todos">
      {state.map((todo) => (
        <TodoCard key={todo.id}  todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
