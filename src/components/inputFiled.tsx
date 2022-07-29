import React, { useRef, useContext, useState } from "react";

//styles
import "./style.css";

//context
import { todoContext } from "../contexts/todoContextProvider";

const InputFiled: React.FC = () => {
  //define state
  const [todo, setTodo] = useState<string>("");

  //create ref for blur(un focus) after press enter
  const inputRef = useRef<HTMLInputElement>(null);

  //access to dispatch of context
  const { dispatch } = useContext(todoContext);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        e.preventDefault();
        if (todo) {
          dispatch({ type: "add", payload: todo });
          setTodo("");
        }
        inputRef.current?.blur();
      }}
    >
      <input
        placeholder="add task hear ..."
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input__submit">
        go
      </button>
    </form>
  );
};

export default InputFiled;
