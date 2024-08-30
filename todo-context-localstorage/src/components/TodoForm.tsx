import { useState } from "react";

import { useTodo } from "../contexts";

function TodoForm() {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const { addTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!todoTitle) return;

    const newTodo = {
      id: Date.now().toString(),
      title: todoTitle,
      isCompleted: false,
    };

    addTodo(newTodo);
    setTodoTitle("");
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
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
