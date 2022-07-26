import React, { useState, useEffect, useRef } from "react";
import { Task } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<Task[]>>;
  todo: Task;
  todos: Task[];
}

const TodoCard: React.FC<Props> = ({ todo, setTodos, todos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.todo);

  const focusInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focusInput.current?.focus();
  }, [edit]);

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

  const editHandler = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };

  const submitEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editText } : todo))
    );
    setEdit(false);
  };

  return (
    <form className="todo" onSubmit={(e) => submitEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editText}
          ref={focusInput}
          className="todo__text"
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todo__text">{todo.todo}</s>
      ) : (
        <span className="todo__text">{todo.todo}</span>
      )}

      <span className="todo__icon" onClick={() => editHandler()}>
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
