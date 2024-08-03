import { useState } from "react";

import { Users } from "./types";
import UsersList from "./components/UsersList";
import Header from "./components/Header";
import Form from "./components/Form";

const API_URL = "https://api.github.com";

const fetchUsers = async (query: string) => {
  if (!query) return [];
  try {
    const apiResponse = await fetch(`${API_URL}/search/users?q=${query}`);
    if (!apiResponse.ok) {
      throw new Error(`Error: ${apiResponse.status} ${apiResponse.statusText}`);
    }
    const result = await apiResponse.json();
    return result.items;
  } catch (error) {
    console.error("Something went wrong!", error);
    throw error;
  }
};

function App() {
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmitClick = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUsers(query);
      setUsers(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Header />
      <Form onSubmit={onSubmitClick} loading={loading} />
      <UsersList users={users} />
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}
    </main>
  );
}

export default App;
