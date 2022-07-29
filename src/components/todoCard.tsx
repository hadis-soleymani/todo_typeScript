import React, { useState, useEffect, useRef ,useContext} from "react";
import { Task } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { todoContext } from "../contexts/todoContextProvider";


interface Props{
  todo:Task;
}

const TodoCard: React.FC<Props> = ({ todo}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.todo);
  const [todos, setTodos] = useState<Task[]>([]);

  const focusInput = useRef<HTMLInputElement>(null);
  const { state, dispatch } = useContext(todoContext);
  useEffect(() => {
    focusInput.current?.focus();
  }, [edit]);

  const doneHandler = (id: number) => {
    dispatch({ type: "done", payload: id })
  };

  const deleteHandler = (id: number) => {
   dispatch({ type: "remove", payload: id })
  //  setTodos(todos.filter((todo) => todo.id != id));
  };

  const editHandler = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };

  const submitEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    // setTodos(
    //   state.map((todo) => (todo.id === id ? { ...todo, todo: editText } : todo))
    // );
    dispatch({type:'edit',payload:{id:id, todo:editText}})
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
