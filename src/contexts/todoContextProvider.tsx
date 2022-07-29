import React, { createContext, useReducer } from "react";

interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}
const initialState=[{

  id: 0,
  todo: 't',
  isDone: false,
}]


type ACTIONTYPE =
  | { type: "remove"; payload: number }
  | { type: "add"; payload: string }
  | { type: "done"; payload: number };

const TodoReducer = (state: Todo[], action: ACTIONTYPE) => {
  console.log(state)
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

type ProviderProps = {
  children: React.ReactNode;
};

export const todoContext = createContext<{
  state: Todo[];
  dispatch: React.Dispatch<ACTIONTYPE>;
}>({ state: [], dispatch: () => {} });


// export const todoContext = createContext<Todo[] | null>(null);

type d ={ 
  todosState: Todo[];  
  dispatch: React.Dispatch<ACTIONTYPE>;
 }

const TodoContextProvider = (props: ProviderProps) => {
  const [state, dispatch] = useReducer(TodoReducer,[]);

  return (
    <todoContext.Provider value={{ state, dispatch }}>
     {props.children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
