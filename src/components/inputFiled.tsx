import React from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputFiled: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className="input">
      <input
        placeholder="add task hear ..."
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
