import React, { createContext, useReducer } from "react";

//interface of one todo object
interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

//we define type of actions this way
type ACTIONTYPE =
  | { type: "remove"; payload: number }
  | { type: "add"; payload: string }
  | { type: "edit"; payload: { id: number; todo: string } }
  | { type: "done"; payload: number };

//create reducer
const TodoReducer = (state: Todo[], action: ACTIONTYPE) => {
  switch (action.type) {
    //add one todo object
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];

    //remove one todo object
    case "remove":
      return state.filter((todoObj) => todoObj.id != action.payload);

    //done one todo object
    case "done":
      return state.map((todoObj) =>
        todoObj.id === action.payload
          ? { ...todoObj, isDone: !todoObj.isDone }
          : todoObj
      );

    //edit todo part of todo object
    case "edit":
      return state.map((todoObj) =>
        todoObj.id === action.payload.id
          ? { ...todoObj, todo: action.payload.todo }
          : todoObj
      );
    default:
      return state;
  }
};

//input type of create context
interface InputCreateContext {
  state: Todo[];
  dispatch: React.Dispatch<ACTIONTYPE>;
}

//create a context with empty initialState (state: [])
export const todoContext = createContext<InputCreateContext>({
  state: [],
  dispatch: () => {},
});

//define type of children
type ProviderProps = {
  children: React.ReactNode;
};

//create context provider for wrapping App component
const TodoContextProvider = (props: ProviderProps) => {
  //[] is initialState
  const [state, dispatch] = useReducer(TodoReducer, []);

  return (
    <todoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
