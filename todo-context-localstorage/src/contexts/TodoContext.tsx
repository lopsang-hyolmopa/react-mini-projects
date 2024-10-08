import { useState, useEffect, createContext, useContext } from "react";

import { TodoContextType, TodoType } from "../types";

type Props = {
  children: React.ReactNode;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoContextProvider = ({ children }: Props) => {
  const [allTodos, setAllTodos] = useState<TodoType[]>([]);

  const addTodo = (todo: TodoType) => {
    setAllTodos((prevTodos) => {
      return [todo, ...prevTodos];
    });
  };

  const updateTodo = (id: string, todo: TodoType) => {
    setAllTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id: string) => {
    setAllTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== id)
    );
  };

  const toogleComplete = (id: string) => {
    setAllTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const locallySavedTodos = JSON.parse(localStorage.getItem("todos") || "[]");

    if (allTodos && allTodos.length > 0) {
      setAllTodos(locallySavedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]);

  return (
    <TodoContext.Provider
      value={{ allTodos, addTodo, updateTodo, deleteTodo, toogleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export function useTodo() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodo must be used within a TodoContextProvider");
  }
  return context;
}
