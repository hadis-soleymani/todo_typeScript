import React from "react";
import { Task } from "../model";
import TodoCard from "./todoCard";

interface Props {
  todos: Task[];
  setTodos: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <TodoCard key={todo.id} setTodos={setTodos} todo={todo} todos={todos}/>
      ))}
    </div>
  );
};

export default TodoList;
