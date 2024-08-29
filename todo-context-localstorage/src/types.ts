export type TodoType = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type TodoContextType = {
  allTodos: TodoType[];
  addTodo: (todo: TodoType) => void;
  updateTodo: (id: string, todo: TodoType) => void;
  deleteTodo: (id: string) => void;
  toogleComplete: () => void;
};
