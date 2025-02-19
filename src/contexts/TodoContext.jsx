import { createContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  return (
    <TodoContext.Provider value={(todo, setTodo)}>
      {children}
    </TodoContext.Provider>
  );
};
