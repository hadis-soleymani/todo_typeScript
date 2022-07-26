import React, { useRef } from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  clickHandle: (e: React.FormEvent) => void;
}

const InputFiled: React.FC<Props> = ({ todo, setTodo, clickHandle }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        clickHandle(e);
        //blur after click enter
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
