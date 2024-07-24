import { useEffect, useState } from "react";

type JokeResponse = {
  id: number;
  setup: string;
  punchline: string;
  type: string;
};

function App() {
  const [jokes, setJokes] = useState<JokeResponse[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [isPunchlineVisible, setIsPunchlineVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const API_URL = "https://official-joke-api.appspot.com/jokes/ten";

  const fetchJokes = async () => {
    try {
      setLoading(true);
      const apiResponse = await fetch(API_URL);
      if (!apiResponse.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await apiResponse.json();
      setJokes(data);
    } catch (error) {
      console.error("Fetching jokes failed", error);
      setJokes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  const handleClick = () => {
    setIndex(Math.floor(Math.random() * jokes.length));
    setIsPunchlineVisible(false);
  };

  return (
    <div className="min-h-screen bg-amber-500 text-white flex items-center justify-center">
      <div className="bg-black rounded-lg shadow-lg text-center text-white h-[80vh] w-[80vw] lg:h-[60vh] flex flex-col items-center justify-between py-12">
        {loading ? (
          <Loading />
        ) : (
          <>
            <span className="text-9xl">😂</span>
            <p className="text-xl lg:text-3xl">Setup: {jokes[index]?.setup}</p>
            {isPunchlineVisible && (
              <p className="text-xl lg:text-3xl">
                Punchline: {jokes[index]?.punchline}
              </p>
            )}
            <button
              onClick={() => setIsPunchlineVisible(!isPunchlineVisible)}
              className="px-4 py-2 bg-white text-black rounded-lg"
            >
              {isPunchlineVisible ? "Hide punchline" : "Show punchline"}
            </button>
            <button
              className="px-6 py-2 bg-amber-500 text-black text-3xl rounded-lg"
              onClick={handleClick}
            >
              Get another joke
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function Loading() {
  return <p className="text-center text-3xl">Loading...</p>;
}

export default App;
