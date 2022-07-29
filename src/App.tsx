import React from "react";

//styles
import "./App.css";

//components
import InputFiled from "./components/inputFiled";
import TodoList from "./components/todoList";

//context provider
import TodoContextProvider from "./contexts/todoContextProvider";

//App return a react function
const App: React.FC = () => {
  return (
    <TodoContextProvider>
      <div className="App">
        <span className="heading">taskify</span>
        <InputFiled />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
};

export default App;
