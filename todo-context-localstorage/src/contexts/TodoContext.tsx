import { useState, useEffect, createContext, useContext } from "react";

import { TodoContextType, TodoType } from "../types";

type Props = {
  children: React.ReactNode;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoContextProvider = ({ children }: Props) => {
  const [allTodos, setAllTodos] = useState<TodoType[]>([]);

  const addTodo = (todo: TodoType) => {
    setAllTodos((prevTodos) => [{ ...todo }, ...prevTodos]);
  };

  const updateTodo = (id: string, todo: TodoType) => {
    set;
  };

  const deleteTodo = (id: string) => {};

  const toogleComplete = () => {};

  useEffect(() => {
    const locallySavedTodos = JSON.parse(localStorage.getItem("todos") || "[]");

    if (allTodos && allTodos.length > 0) {
      setAllTodos(locallySavedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]);

  console.log(allTodos);

  return (
    <TodoContext.Provider
      value={{ allTodos, addTodo, updateTodo, deleteTodo, toogleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export function useTodo() {
  return useContext(TodoContext);
}
