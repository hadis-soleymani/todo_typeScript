import React, { useState} from "react";
import "./App.css";
import InputFiled from "./components/inputFiled";
import TodoList from "./components/todoList";
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
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
