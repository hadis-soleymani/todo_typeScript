import React, { useState} from "react";
import "./App.css";
import InputFiled from "./components/inputFiled";
import TodoList from "./components/todoList";
import { Task } from "./model";
import TodoContextProvider from "./contexts/todoContextProvider";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Task[]>([]);
 



  return (
    <TodoContextProvider>
    <div className="App">
      <span className="heading">taskify</span>
      <InputFiled />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
    </TodoContextProvider>
  );
};

export default App;
