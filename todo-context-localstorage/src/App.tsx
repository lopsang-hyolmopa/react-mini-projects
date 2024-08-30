import { TodoForm, TodoItem } from "./components";
import { TodoContextProvider, useTodo } from "./contexts";
import { TodoType } from "./types";

function App() {
  const { allTodos } = useTodo();

  return (
    <TodoContextProvider>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {allTodos.map((todo: TodoType) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
