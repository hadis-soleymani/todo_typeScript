import React, { useState, useEffect, useRef, useContext } from "react";

//import interface
import { Task } from "../model";

//icons
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

//context
import { todoContext } from "../contexts/todoContextProvider";

//define type of Entrance props
interface Props {
  todo: Task;
}

//TodoCard return a react function
const TodoCard: React.FC<Props> = ({ todo }) => {
  //define states
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.todo);

  //create ref for auto focus by press edit
  const focusInput = useRef<HTMLInputElement>(null);

  //access to dispatch of context
  const { dispatch } = useContext(todoContext);

  //focus by change edit state
  useEffect(() => {
    focusInput.current?.focus();
  }, [edit]);

  //turn on edit text if todo not done
  const editHandler = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };

  //change todo text by press enter
  const submitEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    dispatch({ type: "edit", payload: { id: id, todo: editText } });
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
        <AiFillDelete
          onClick={() => dispatch({ type: "remove", payload: todo.id })}
        />
      </span>
      <span className="todo__icon">
        <BsCheckLg
          onClick={() => dispatch({ type: "done", payload: todo.id })}
        />
      </span>
    </form>
  );
};

export default TodoCard;
