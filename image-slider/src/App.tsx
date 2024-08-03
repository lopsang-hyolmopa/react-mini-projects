import { useEffect, useState } from "react";
import { Image } from "./types";

import ImageSlider from "./components/ImageSlider";

const API_URL = "https://picsum.photos/v2/list?page=59&limit=10";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    try {
      const apiResponse = await fetch(API_URL);
      if (!apiResponse.ok) {
        throw new Error("Network response was not ok!");
      }

      const data: Image[] = await apiResponse.json();
      setImages(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occured");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <main className="h-screen bg-neutral-800 flex flex-col items-center text-white">
      <h1 className="py-4 text-3xl font-semibold">Image Slider</h1>
      {loading && <div>Fetching images. Please wait!</div>}
      {error && <div>{error}</div>}
      {!loading && !error && <ImageSlider images={images} />}
    </main>
  );
}

export default App;
