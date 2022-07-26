import React, { useState } from "react";
import "./App.css";
import InputFiled from "./components/inputFiled";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  console.log(todo)
  return (
    <div className="App">
      <span className="heading">taskify</span>
      <InputFiled todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
