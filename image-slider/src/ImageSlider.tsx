import { useEffect, useState } from "react";
import { Image } from "./types";

type ImageSliderProps = {
  apiURL: string;
  page: number;
  limit: number;
};

export default function ImageSlider({ apiURL, page, limit }: ImageSliderProps) {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    try {
      const apiResponse = await fetch(`${apiURL}?page=${page}&limit=${limit}`);
      if (!apiResponse.ok) {
        throw Error("Network response was not ok!");
      }

      const data = await apiResponse.json();
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

  console.log("images", images);

  return (
    <section className="h-screen bg-blue-950 text-white">
      <h1 className="py-4 text-3xl font-semibold text-center">Images Slider</h1>
      {loading && <div>Fetching images. Please wait!</div>}
      {error && <div>{error}</div>}
      <div>
        {images.map((image) => {
          return (
            <div key={image.id}>
              <img src={image.download_url} alt={`Image by ${image.author}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
