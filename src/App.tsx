import React, { useState } from "react";
import "./App.css";
import InputFiled from "./components/inputFiled";
import { Task } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Task[]>([]);

  const clickHandle = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo,
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className="App">
      <span className="heading">taskify</span>
      <InputFiled todo={todo} setTodo={setTodo} clickHandle={clickHandle} />
    </div>
  );
};

export default App;
