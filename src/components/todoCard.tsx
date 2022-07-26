import React,{useState} from "react";
import { Task } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<Task[]>>;
  todo: Task;
  todos: Task[];
}

const TodoCard: React.FC<Props> = ({ todo, setTodos, todos }) => {
  const doneHandler = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const deleteHandler = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  return (
    <form className="todo">
      {todo.isDone ? (
        <s className="todo__text">{todo.todo}</s>
      ) : (
        <span className="todo__text">{todo.todo}</span>
      )}

      <span className="todo__icon">
        <AiFillEdit />
      </span>
      <span className="todo__icon">
        <AiFillDelete onClick={() => deleteHandler(todo.id)} />
      </span>
      <span className="todo__icon">
        <BsCheckLg onClick={() => doneHandler(todo.id)} />
      </span>
    </form>
  );
};

export default TodoCard;
