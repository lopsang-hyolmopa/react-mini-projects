import { useState } from "react";
import { TodoType } from "../types";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState<TodoType | null>(null);

  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
      title: todo,
      isCompleted: false,
    };

    addTodo(newTodo);
    setTodo(null);
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
