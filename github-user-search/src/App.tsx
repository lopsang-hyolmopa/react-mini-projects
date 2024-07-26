import { useState } from "react";
import { FaGithub } from "react-icons/fa";

import { Users } from "./types";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState<Users[]>([]);
  const [query, setQuery] = useState<string>("");

  const apiUrl = "https://api.github.com";

  const fetchUsers = async () => {
    try {
      const apiResponse = await fetch(`${apiUrl}/search/users?q=${query}`);
      const result = await apiResponse.json();
      const data = await result.items;
      setUsers(data);
    } catch (error) {
      console.error("Something went wrong!", error);
    }
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <div className="py-10 text-3xl md:text-4xl flex items-center justify-center gap-4">
        <FaGithub />
        <h1 className="font-bold">Github User Finder</h1>
      </div>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Enter username"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className="rounded-l-md text-black w-[70%] md:w-80 px-4 py-2"
        />
        <button
          onClick={fetchUsers}
          className="bg-blue-700 py-2 w-[20%] md:w-28 rounded-r-md"
        >
          Search
        </button>
      </div>
      <UsersList users={users} />
    </main>
  );
}

export default App;
