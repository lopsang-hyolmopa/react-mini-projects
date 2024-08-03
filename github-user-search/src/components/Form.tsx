import { FormEvent, useState } from "react";

type FormProps = {
    onSubmit: (query: string) => Promise<void>;
  loading: boolean;
};

export default function Form({ onSubmit, loading }: FormProps) {
  const [query, setQuery] = useState<string>("");

  const handleClick = async (e: FormEvent) => {
    e.preventDefault();
    await onSubmit(query);
  };

  return (
    <form onSubmit={handleClick} className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Enter username"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-l-md text-black w-[70%] md:w-80 px-4 py-2"
      />
      <button
        type="submit"
        className="bg-blue-700 py-2 w-[20%] md:w-28 rounded-r-md"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}
