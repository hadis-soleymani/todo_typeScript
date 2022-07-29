import React,{useContext} from "react";
import { Task } from "../model";
import TodoCard from "./todoCard";
import {todoContext} from '../contexts/todoContextProvider'

interface Props {
  todos: Task[];
  setTodos: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  const { state, dispatch } = useContext(todoContext);
  console.log('state:',state)
  return (
    <div className="todos">
      {state.map((todo) => (
        <TodoCard key={todo.id} setTodos={setTodos} todo={todo} todos={todos}/>
      ))}
    </div>
  );
};

export default TodoList;
