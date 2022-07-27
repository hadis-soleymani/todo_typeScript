import React, { createContext, useReducer } from "react";

interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

type ACTIONTYPE =
  | { type: "remove"; payload: number }
  | { type: "add"; payload: string }
  | { type: "done"; payload: number };

const TodoReducer = (state: Todo[], action: ACTIONTYPE) => {
  switch (action.type) {
    
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];

    case "remove":
      return state.filter((todoObj) => todoObj.id != action.payload);

    case "done":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );

    default:
      return state;
  }
};

const TodoContextProvider = () => {
  const [state, dispatch] = useReducer(TodoReducer, []);

  return <div></div>;
};

export default TodoContextProvider;
